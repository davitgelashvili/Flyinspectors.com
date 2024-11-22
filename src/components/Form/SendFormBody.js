
import { useEffect, useState } from "react";
import UploadWidget from "../UploadWidget/UploadWidget";
import DisableUploadWidget from "../UploadWidget/DisableUploadWidget";
import TextInput from "../UI/TextInput";
import styles from "./form.module.scss";
import Signature from "./Signature";
import File from "../UploadWidget/File";

const SendFormBody = ({ value, setValue, uploadFile, accept, setAccept }) => {
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
          if(input.type === 'textarea'){
            return (
              <div className="col-12" key={input.id}>
                <TextInput
                  type={input.type}
                  value={input.value}
                  placeholder={input.placeholder}
                  name={input.name}
                  icon={input.icon}
                  onChange={handleChange}
                />
              </div>
            )
          }else {
            return (
              <div className="col-6" key={input.id}>
                <TextInput
                  type={input.type}
                  value={input.value}
                  placeholder={input.placeholder}
                  name={input.name}
                  icon={input.icon}
                  onChange={handleChange}
                />
              </div>
            )
          }
        })}
        <div className="col-6">
          {
            accept.passport ? (
              <UploadWidget  value={value} valueName={"passportImage"} setValue={setValue} title={'Passport Photo'} name={'Upload Photo'} />
            ) : accept.ticket ? (
              <File title={'Passport Photo'} name={'upoaded'}/>
            ) : (
              <DisableUploadWidget title={'Passport Photo'} name={'0 Upload Photo'}/>
            )
          }
        </div>
        <div className="col-6">
          {
            accept.ticket ? (
              <UploadWidget  value={value} valueName={"ticketImage"} setValue={setValue} title={'Ticket'} name={'Upload Ticket'} />
            ) : (
              <DisableUploadWidget title={'Ticket'} name={'0 Upload Ticket'}/>
            )
          }
        </div>
        <div className="col-12">
          {
            accept.other ? (
              <UploadWidget  value={value} valueName={"ticketImage"} setValue={setValue} title={'Other documents'} name={'Upload Picture'} />
            ) : (
              <DisableUploadWidget title={'Other documents'} name={'0 Upload Picture'}/>
            )
          }
        </div>
        <div className="col-12">
          <Signature value={value} valueName={"ticketImage"} setValue={setValue} title={'Electronic signature:'} desc={'Please sign the electronic signature.'}/>
        </div>
        <div className="col-12">
          <button onClick={(e) => uploadFile(e)}>Submit Form</button>
        </div>
      </div>

    </form> 
  );
};

export default SendFormBody;
