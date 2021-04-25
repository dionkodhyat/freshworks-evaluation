import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const DataForm = (props) => {
    const [parkName, setParkName] = useState('');
    const [numOfDucks, setNumOfDucks] = useState('');
    const [foodAmount, setFoodAmount] = useState('');
    const [foodType, setfoodType] = useState('');
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00')
    const [numOfDucksValidate, setNumOfDucksValidate] = useState(false)
    const [foodAmountValidate, setFoodAmountValidate] = useState(false)



    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            parkName : parkName,
            numOfDucks : numOfDucks,
            foodAmount : foodAmount,
            foodType : foodType,
            timeFed : `${hour}:${minute}`
        }
        try {
            const response = await fetch("http://localhost:9000/data", {
                headers: {
                    "Content-Type": "application/json",
                },
                method : "post",
                mode : 'cors',
                body : JSON.stringify(data)
            })
            window.location = "/"
            props.openModal(false)
        
        } catch(err) {
            alert('Something wrong with the server, please try again later')
        }
           
    }

    const validateForm = (e, regex, setFormCallback, setFormValidateCallback) => {
        if (e.target.value === '' || regex.test(e.target.value))  {
            setFormCallback(e.target.value)
            setFormValidateCallback(false)
        } else {
            setFormValidateCallback(true)
        }
    }

    const regexInt = /^[0-9\b]+$/;
    const regexFloat = /([0-9]*[.])?[0-9]+/;

    return (
        <div>
            <Form onSubmit={handleSubmit}> 
                <Form.Group>
                    <Form.Label>Park</Form.Label>
                    <Form.Control required
                                  type="text" 
                                  placeholder="Enter the park name" 
                                  name="parkName" 
                                  value={parkName} 
                                  onChange={(e) => setParkName(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Number of Ducks Fed</Form.Label>
                    <Form.Control isInvalid={numOfDucksValidate} 
                                  required type="text" 
                                  placeholder="Enter number of ducks fed" 
                                  name="numOfDucks" 
                                  value={numOfDucks} 
                                  onChange={(e) => validateForm(e, regexInt, setNumOfDucks, setNumOfDucksValidate)}/>
                    <Form.Control.Feedback type="invalid">Please enter a number</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Food</Form.Label>
                    <Form.Control required type="text" 
                                  placeholder="Enter the type of food" 
                                  name="foodType" 
                                  value={foodType} 
                                  onChange={(e) => setfoodType(e.target.value)}/>
                </Form.Group>

                <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Food Amount (g)</Form.Label>
                        <Form.Control isInvalid={foodAmountValidate} 
                                      required type="text" 
                                      placeholder="Enter food amount (g)" 
                                      name="foodAmount" 
                                      value={foodAmount} 
                                      onChange={(e) => validateForm(e, regexFloat, setFoodAmount, setFoodAmountValidate)}/>
                        <Form.Control.Feedback type="invalid">Please enter a number</Form.Control.Feedback>
                    </Form.Group>
                    
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Time Fed</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control
                                    placeholder="hr"
                                    required
                                    as="select"
                                    custom
                                    name="hr"
                                    defaultValue={hour}
                                    onChange={(e) => setHour(e.target.value)}
                                >
                                        <option value="00">00</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="8">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                    </Form.Control>
                                </Col>
                                :
                                <Col>
                                    <Form.Control
                                            placeholder="min"
                                            required
                                            as="select"
                                            className="my-1 mr-sm-2"
                                            id="inlineFormCustomSelectPref"
                                            custom
                                            name="min"
                                            defaultValue={minute}
                                            onChange={(e) => setMinute(e.target.value)}
                                        >
                
                                        <option value="00">00</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="20">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                        <option value="32">32</option>
                                        <option value="33">33</option>
                                        <option value="34">34</option>
                                        <option value="35">35</option>
                                        <option value="36">36</option>
                                        <option value="37">37</option>
                                        <option value="38">38</option>
                                        <option value="39">39</option>
                                        <option value="40">40</option>
                                        <option value="41">41</option>
                                        <option value="42">42</option>
                                        <option value="43">43</option>
                                        <option value="44">44</option>
                                        <option value="45">45</option>
                                        <option value="46">46</option>
                                        <option value="47">47</option>
                                        <option value="48">48</option>
                                        <option value="49">49</option>
                                        <option value="50">50</option>
                                        <option value="51">51</option>
                                        <option value="52">52</option>
                                        <option value="53">53</option>
                                        <option value="54">54</option>
                                        <option value="55">55</option>
                                        <option value="56">56</option>
                                        <option value="57">57</option>
                                        <option value="58">58</option>
                                        <option value="59">59</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>
                
                <div className="d-flex justify-content-end align-content-around">
                    <Button className="mr-2" variant="danger" onClick={() => props.openModal(false)}>Cancel</Button>
                    <Button className="" type="submit" variant="primary">Submit</Button>
                </div>
            </Form>
        </div>
    )
}

export default DataForm
