'use strict';
const { faker } = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data=[]
   let amount=11;
   const courses = [
    "Introduction to Computer Science",
    "Data Structures and Algorithms",
    "Web Development Fundamentals",
    "Machine Learning Basics",
    "Database Management",
    "Artificial Intelligence",
    "Digital Marketing",
    "Graphic Design",
    "Mobile App Development",
    "Game Development",
    "Cybersecurity Fundamentals",
    "UX/UI Design",
    // Add more course names as needed
  ];
  const professionalQualifications = [
    "Certified Public Accountant (CPA)",
    "Project Management Professional (PMP)",
    "Certified Information Systems Security Professional (CISSP)",
    "Certified ScrumMaster (CSM)",
    "Certified Ethical Hacker (CEH)",
    "Certified Business Analyst Professional (CBAP)",
    "Certified Six Sigma Black Belt",
    "Chartered Financial Analyst (CFA)",
    "Certified Nursing Assistant (CNA)",
    "Certified Professional in Human Resources (PHR)",
    "Certified Information Security Manager (CISM)",
    "Certified Marketing Professional (CMP)",
    "Certified Pharmacy Technician (CPhT)",
    "Certified Medical Assistant (CMA)",
    "Certified Veterinary Technician (CVT)",
    "Certified Welding Inspector (CWI)",
    "Certified Professional Accountant (CPA)",
    "Certified Occupational Therapy Assistant (COTA)",
    "Certified Surgical Technologist (CST)",
    "Certified Dental Assistant (CDA)",
  ]
  const medicalCategories = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  const ge=[
    'Male',
    'Female',
    'Male','Female',
    'Male','Female',
    'Male','Female',
    'Male','Female',
    'Male','Female',
    'Male','Female',
    'Male','Female',
    'Male','Female',
  ];
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomPhoneNumberInteger() {
    // Generate a random country code (e.g., 1 for the United States)
    const countryCode = 1;
  
    // Generate a random area code (e.g., 555)
    const areaCode = getRandomInteger(100, 999); // Random 3-digit number
  
    // Generate a random local number (e.g., 5551234)
    const localNumber = getRandomInteger(1000000, 9999999); // Random 7-digit number
  
    // Combine the parts to form a complete phone number as an integer
    const phoneNumber = countryCode * 10000000 + areaCode * 10000 + localNumber;
  
    return phoneNumber;
  }
  function getRandomDate() {
    // Generate a random year between a specific range, e.g., 1970 to 2023
    const minYear = 1970;
    const maxYear = 2023;
    const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  
    // Generate a random month between 1 and 12
    const month = Math.floor(Math.random() * 12) + 1;
  
    // Generate a random day between 1 and 31 (the maximum number of days in a month)
    const maxDaysInMonth = new Date(year, month, 0).getDate();
    const day = Math.floor(Math.random() * maxDaysInMonth) + 1;
  
    // Create a Date object with the generated year, month, and day
    const randomDate = new Date(year, month - 1, day);
  
    return randomDate;
  }
  const met = [
    "Cardiology",
    "Dermatology",
    "Endocrinology",
    "Gastroenterology",
    "Hematology",
    "Immunology",
    "Neurology",
    "Obstetrics and Gynecology",
    "Oncology",
    "Ophthalmology",
    "Orthopedics",
    "Otolaryngology (ENT)",
    "Pediatrics",
    "Psychiatry",
    "Pulmonology",
    "Radiology",
    "Rheumatology",
    "Urology",
    "Nephrology",
    "Emergency Medicine",
  ];
  
   while(amount--){
    data.push({
      name:faker.internet.userName(),
      rank:medicalCategories[amount],
      gender:ge[amount],
      dob:getRandomDate(),
      doc:getRandomDate(),
      dor:getRandomDate(),
      dos:getRandomDate(),
      mob_no:getRandomPhoneNumberInteger(),
      courses:courses[amount],
      professional_qualification:professionalQualifications[amount],
      createdAt:new Date(),
      updatedAt:new Date(),
      pers_no:Math.random()*100,
      med_cat:met[amount]
    })
   }
   await queryInterface.bulkInsert('Officers',data,{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    let data=[]
   let amount=11;
   const courses = [
    "Introduction to Computer Science",
    "Data Structures and Algorithms",
    "Web Development Fundamentals",
    "Machine Learning Basics",
    "Database Management",
    "Artificial Intelligence",
    "Digital Marketing",
    "Graphic Design",
    "Mobile App Development",
    "Game Development",
    "Cybersecurity Fundamentals",
    "UX/UI Design",
    // Add more course names as needed
  ];
  const professionalQualifications = [
    "Certified Public Accountant (CPA)",
    "Project Management Professional (PMP)",
    "Certified Information Systems Security Professional (CISSP)",
    "Certified ScrumMaster (CSM)",
    "Certified Ethical Hacker (CEH)",
    "Certified Business Analyst Professional (CBAP)",
    "Certified Six Sigma Black Belt",
    "Chartered Financial Analyst (CFA)",
    "Certified Nursing Assistant (CNA)",
    "Certified Professional in Human Resources (PHR)",
    "Certified Information Security Manager (CISM)",
    "Certified Marketing Professional (CMP)",
    "Certified Pharmacy Technician (CPhT)",
    "Certified Medical Assistant (CMA)",
    "Certified Veterinary Technician (CVT)",
    "Certified Welding Inspector (CWI)",
    "Certified Professional Accountant (CPA)",
    "Certified Occupational Therapy Assistant (COTA)",
    "Certified Surgical Technologist (CST)",
    "Certified Dental Assistant (CDA)",
  ]
  const medicalCategories = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  const ge=[
    'Male',
    'Female',
    'Male','Female',
    'Male','Female',
    'Male','Female',
    'Male','Female',
    'Male','Female',
    'Male','Female',
    'Male','Female',
    'Male','Female',
  ];
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomPhoneNumberInteger() {
    // Generate a random country code (e.g., 1 for the United States)
    const countryCode = 1;
  
    // Generate a random area code (e.g., 555)
    const areaCode = getRandomInteger(100, 999); // Random 3-digit number
  
    // Generate a random local number (e.g., 5551234)
    const localNumber = getRandomInteger(1000000, 9999999); // Random 7-digit number
  
    // Combine the parts to form a complete phone number as an integer
    const phoneNumber = countryCode * 10000000 + areaCode * 10000 + localNumber;
  
    return phoneNumber;
  }
  function getRandomDate() {
    // Generate a random year between a specific range, e.g., 1970 to 2023
    const minYear = 1970;
    const maxYear = 2023;
    const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  
    // Generate a random month between 1 and 12
    const month = Math.floor(Math.random() * 12) + 1;
  
    // Generate a random day between 1 and 31 (the maximum number of days in a month)
    const maxDaysInMonth = new Date(year, month, 0).getDate();
    const day = Math.floor(Math.random() * maxDaysInMonth) + 1;
  
    // Create a Date object with the generated year, month, and day
    const randomDate = new Date(year, month - 1, day);
  
    return randomDate;
  }
  const met = [
    "Cardiology",
    "Dermatology",
    "Endocrinology",
    "Gastroenterology",
    "Hematology",
    "Immunology",
    "Neurology",
    "Obstetrics and Gynecology",
    "Oncology",
    "Ophthalmology",
    "Orthopedics",
    "Otolaryngology (ENT)",
    "Pediatrics",
    "Psychiatry",
    "Pulmonology",
    "Radiology",
    "Rheumatology",
    "Urology",
    "Nephrology",
    "Emergency Medicine",
  ];
  
   while(amount--){
    data.push({
      name:faker.internet.userName(),
      rank:medicalCategories[amount],
      gender:ge[amount],
      dob:getRandomDate(),
      doc:getRandomDate(),
      dor:getRandomDate(),
      dos:getRandomDate(),
      mob_no:getRandomPhoneNumberInteger(),
      courses:courses[amount],
      professional_qualification:professionalQualifications[amount],
      createdAt:new Date(),
      updatedAt:new Date(),
      pers_no:Math.random()*100,
      med_cat:met[amount]
    })
   }
   await queryInterface.bulkDelete('Officers',data,{});
  }
};
