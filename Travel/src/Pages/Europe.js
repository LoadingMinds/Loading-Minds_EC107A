// import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import '../../src/Pages/singapore.css'; 
import React, { useState } from 'react';
import GooglePayButton from '@google-pay/button-react';
// Import your images
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/singapore_cityscape.jpg';

const Europe = () => {
  const [traveler, setTraveler] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleChange = (e) => {
    setTraveler({ ...traveler, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (traveler.firstName && traveler.lastName && traveler.email && traveler.phone) {
      setIsFormFilled(true);
      console.log(traveler);
    } else {
      alert('Please fill out the form first');
    }
  };
  const handleBookPlan = () => {
    if (!isFormFilled) {
      alert('Please fill out the form first');
    } else {
      // Handle booking plan here
    }
  };

  return (
    <>
       
      <div className="singapore-page">
      <div className="pic section_margin">
        <h3>Europe</h3>
      </div>
      <div className="text_box section_margin">
        <h4>View Description</h4>
        <p>Europe, a continent steeped in history and diversity, spans from Portugal to Russia, boasting iconic landmarks, diverse cultures, and political complexity. From the ancient ruins of Greece to the modern cities of London and Paris, Europe is a tapestry of tradition and innovation. Despite challenges, including economic instability and migration, Europe's resilience and rich heritage continue to shape global culture and inspire hope for the future.</p>
      </div>
      <div className="plans section_margin">
        <h4>View Plans</h4>
        <div className="plan">
        <div class="timeline-container">
            <div class="timeline-item">
                <div class="timeline-item-content">
                    <span class="tag">Tag</span>
                    <time>Day 1</time>
                    <p>Explore Marina Bay - Entry to Gardens by the Bay: $28 SGD/person, Marina Bay Sands SkyPark Observation Deck: $23 SGD/adult, ArtScience Museum: $21 SGD/adult.</p>
                    <p>Total: Approximately $72 SGD/person.</p>
                    <span class="circle"></span>
                </div>
            </div>
            <div class="timeline-item section_margin">
                <div class="timeline-item-content">
                    <span class="tag">Tag</span>
                    <time>Day 2</time>
                    <p>Sentosa Island Adventure - Universal Studios Singapore ticket: $81 SGD/adult, S.E.A. Aquarium ticket: $41 SGD/adult, Adventure Cove Waterpark ticket: $38 SGD/adult, Wings of Time show: $18 SGD/adult.</p>
                    <p>Total: Approximately $178 SGD/person.</p>
                    <span class="circle"></span>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-item-content">
                    <span class="tag">Tag</span>
                    <time>Day 3</time>
                    <p>Cultural Immersion - Chinatown and Little India exploration: Free, Buddha Tooth Relic Temple: Free (donation encouraged), Sri Veeramakaliamman Temple: Free. Total: Minimal expenses for food and transportation, </p>
                    <p>Total: Approximately $20-30 SGD/person.</p>
                    <span class="circle"></span>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-item-content">
                    <span class="tag">Tag</span>
                    <time>Day 4</time>
                    <p>Nature and Wildlife - Singapore Zoo ticket: $41 SGD/adult, Jurong Bird Park ticket: $31 SGD/adult, Singapore Botanic Gardens: Free (orchid garden entry: $5 SGD/adult). </p>
                    <p>Total: Approximately $77 SGD/person.</p>
                    <span class="circle"></span>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-item-content">
                    <span class="tag">Tag</span>
                    <time>Day 5</time>
                    <p>Shopping and Food - Shopping expenses vary depending on personal preferences. Food at a hawker center: $5-10 SGD/person, meal at a cafe or restaurant: $20-30 SGD/person.</p>
                    <p>Total: Approximately $30-40 SGD/person for food, plus shopping expenses.</p>
                    <span class="circle"></span>
                </div>
            </div>
        </div>
        <div className="traveler-form section_margin">
        <h4>Traveler's Details</h4>
        <form onSubmit={handleSubmit}>
          <label className="l1">
            First Name:
            <input className="in" type="text" name="firstName" value={traveler.firstName} onChange={handleChange} />
          </label>
          <label className="l1">
            Last Name:
            <input className="in" type="text" name="lastName" value={traveler.lastName} onChange={handleChange} />
          </label>
          <label className="l1">
            Email:
            <input className="in" type="email" name="email" value={traveler.email} onChange={handleChange} />
          </label>
          <label className="l1">
            Phone:
            <input type="tel" name="phone" value={traveler.phone} onChange={handleChange} />
            </label>
            <label className="l1">
          <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
        </div>
       
      </div>
      <div className='buy'>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '1',
            currencyCode: 'INR',
            countryCode: 'IND',
          },
          shippingAddressRequired: true,
          callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success', paymentRequest);
        }}
        onPaymentAuthorized={paymentData => {
            console.log('Payment Authorised Success', paymentData)
            return { transactionState: 'SUCCESS'}
          }
        }
        onPaymentDataChanged={paymentData => {
            console.log('On Payment Data Changed', paymentData)
            return { }
          }
        }
        existingPaymentMethodRequired='false'
        buttonColor='white'
        buttonType='Buy'
        className='paybtn'
      />
      </div>
    </div>
    </>
  );
};

export default Europe;