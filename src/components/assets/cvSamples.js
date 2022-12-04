import uniqid from "uniqid";

const cvEmpty = {
  personalData: {
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    phoneNumber: "",
    email: "",
  },
  experienceData: [
    {
      id: uniqid(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
  educationData: [
    {
      id: uniqid(),
      universityName: "",
      city: "",
      degree: "",
      from: "",
      to: "",
    },
  ],
};

const cvExample = {
  personalData: {
    firstName: "Lionel",
    lastName: "Messi",
    title: "Futolista Consagrado / Leyenda",
    address: "Qatar",
    phoneNumber: "-",
    email: "messilove@gmail.com",
  },
  experienceData: [
    {
      id: uniqid(),
      position: "Futbolista en Barcelona",
      company: "Barcelona FC",
      city: "Barcelona",
      from: "2018",
      to: "2021",
    },
    {
      id: uniqid(),
      position: "Futbolista en PSG",
      company: "PSG",
      city: "París",
      from: "2021",
      to: "Actualidad",
    },
  ],
  educationData: [
    {
      id: uniqid(),
      universityName: "Colegio Pellegrini",
      city: "CABA",
      degree: "Título Secundario",
      from: "1990",
      to: "1996",
    },
    {
      id: uniqid(),
      universityName: "UADE",
      city: "CABA",
      degree: "Contador",
      from: "1998",
      to: "2004",
    },
  ],
};

export { cvEmpty, cvExample };
