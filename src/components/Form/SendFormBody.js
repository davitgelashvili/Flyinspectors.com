
import { useEffect, useState } from "react";
import UploadWidget from "../UploadWidget/UploadWidget";
import DisableUploadWidget from "../UploadWidget/DisableUploadWidget";
import TextInput from "../UI/TextInput";
import File from "../UploadWidget/File";
import SignatureContent from "./SignatureContent";
import ReactSignatureCanvas from 'react-signature-canvas'
import styles from './Signature.module.scss'
import { Link } from "react-router-dom";

const SendFormBody = ({ value, setValue, uploadFile, accept, setAccept, setLoad, load }) => {
  const [signature, setSignature] = useState()
  const inputs = [
    {
      id: 32345,
      name: "firstName",
      type: "text",
      value: value.firstName,
      placeholder: "Firstname",
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600392/Form%20icons/ijhlmpfbajgs0ypeymoy.svg"
    },
    {
      id: 1574,
      name: "lastName",
      type: "text",
      value: value.lastName,
      placeholder: "LastName",
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600392/Form%20icons/ijhlmpfbajgs0ypeymoy.svg"
    },
    {
      id: 46477,
      name: "phone",
      type: "text",
      value: value.phone,
      placeholder: "Phone",
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600390/Form%20icons/ifezno0nleyy8tyuclzg.svg"
    },
    {
      id: 5703,
      name: "email",
      type: "text",
      value: value.email,
      placeholder: "Email",
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600391/Form%20icons/nslmitrcambiai6wmfen.svg"
    },
    {
      id: 34643,
      name: "city",
      type: "text",
      value: value.city,
      placeholder: "City",
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600391/Form%20icons/kuhub9sf2shcfwtecvy9.svg"
    },
    {
      id: 753235,
      name: "address",
      type: "text",
      value: value.address,
      placeholder: "Address",
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600391/Form%20icons/chfs24yjcgkltrezdbzn.svg"
    },
    {
      id: 36273,
      name: "problem",
      type: "select",
      value: value.problem,
      selectData: [
        'Flight Delay',
        'Flight Cancel',
        'OverBooked Flight',
        'Missed Connection',
        'lost Luggage'
      ],
      placeholder: "Select problem",
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600393/Form%20icons/sfew5nqowhazn00o76ho.svg"
    },
    {
      id: 485845,
      name: "flightNumber",
      type: "text",
      value: value.flightNumber,
      placeholder: "FlightNumber",
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600391/Form%20icons/mn0qzrqet0padkpm6rgj.svg"
    },
    {
      id: 457853,
      name: "date",
      type: "date",
      value: value.date,
      placeholder: "Date",
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600391/Form%20icons/ivmgutc8eckheli6at9q.svg"
    },
    {
      id: 35262,
      name: "select",
      type: "select",
      value: value.select,
      selectData: [
        'II have never started process by myself\nor other claim company',
        'I have already tried to get compensation'
      ],
      placeholder: "Select",
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600393/Form%20icons/nzxyqpypgliouotsa6ie.svg"
    },
    {
      id: 64375,
      name: "description",
      type: "textarea",
      value: value.description,
      placeholder: "Describe the  problem",
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600393/Form%20icons/nzxyqpypgliouotsa6ie.svg"
    },

  ]

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <div className="row">
        {inputs?.map((input) => {
          if (input.type === 'textarea') {
            return (
              <div className="col-lg-12" key={input.id}>
                <TextInput
                  type={input.type}
                  value={input.value}
                  placeholder={input.placeholder}
                  selectData={input.selectData}
                  name={input.name}
                  icon={input.icon}
                  onChange={handleChange}
                />
              </div>
            )
          } else {
            return (
              <div className="col-lg-6" key={input.id}>
                <TextInput
                  type={input.type}
                  value={input.value}
                  placeholder={input.placeholder}
                  selectData={input.selectData}
                  name={input.name}
                  icon={input.icon}
                  onChange={handleChange}
                />
              </div>
            )
          }
        })}
        <div className="col-lg-6">
          {
            accept.passport ? (
              accept.ticket ? (
                <File title={'Passport Photo'} name={'IMG 1'} />
              ) : (
                <UploadWidget value={value} valueName={"passportImage"} setValue={setValue} title={'Passport Photo'} name={'Upload Photo'} />
              )
            ) : (
              <DisableUploadWidget title={'Passport Photo'} name={'0 Upload Photo'} />
            )
          }
        </div>
        <div className="col-lg-6">
          {
            accept.ticket ? (
              accept.other ? (
                <File title={'Passport Photo'} name={'IMG 2'} />
              ) : (
                <UploadWidget value={value} valueName={"ticketImage"} setValue={setValue} title={'Ticket'} name={'Upload Ticket'} />
              )
            ) : (
              <DisableUploadWidget title={'Ticket'} name={'0 Upload Ticket'} />
            )
          }
        </div>
        <div className="col-lg-12">
          {
            accept.other ? (
              <UploadWidget value={value} valueName={"otherImage"} setValue={setValue} title={'Other documents'} name={'Upload Picture'} />
            ) : (
              <DisableUploadWidget title={'Other documents'} name={'0 Upload Picture'} />
            )
          }
        </div>
        <div className="col-lg-12">
          <div className={styles.signature}>  
            <div className={styles.signature__head}>
              <p className={styles.signature__title}>
                <strong>Electronic signature:</strong>
                <span>
                  Please sign the electronic signature.
                </span>
              </p>
            </div>
            <div className={styles.signature__body}>
              <ReactSignatureCanvas
                ref={(ref) => setSignature(ref)}
                onEnd={() => {
                  const res = signature.getTrimmedCanvas().toDataURL('image/png')
                  setValue({ ...value, "signature": res })
                }}
                penColor='blue'
                canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />
            </div>
          </div>
          {/* <SignatureContent value={value} setValue={setValue}/> */}
          {/* <Signature value={value} valueName={"ticketImage"} setValue={setValue} title={'Electronic signature:'} desc={'Please sign the electronic signature.'}/> */}
        </div>
        <div>
          <br />
        </div>
        <div className="d-flex justify-content-center">
          <label>
            <input type="checkbox" />
            <span>
            I agree with <Link to={''}>Terms and Conditions</Link>
            </span>
          </label>
        </div>
        <div>
          <button
            style={{
              border: "none",
              lineHeight: "24px",
              fontSize: "16px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",  // Centers text horizontally
              textAlign: "center",       // Ensures the text is centered
              borderRadius: "6px",
              backgroundColor: "#FD9B28",
              color: "#FFFFFF",
              width: "100%",
              height: "40px",
              marginTop: "20px",
              cursor: "pointer"
            }}
            onClick={(e) => uploadFile(e)}
          >
            {load ? 'loading' : 'Submit Form'}
          </button>
        </div>
      </div>

    </form>
  );
};

export default SendFormBody;
