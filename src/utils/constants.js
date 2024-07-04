import call from "../assets/icons/call.svg";
import heart from "../assets/icons/heart.svg";
import hours from "../assets/icons/hours.svg";
import lab from "../assets/icons/lab.svg";
import mail from "../assets/icons/mail.svg";
import map from "../assets/icons/map.svg";
import medicine from "../assets/icons/medicine.svg";
import opd from "../assets/icons/opd.svg";
import stomach from "../assets/icons/stomach.svg";
import teeth from "../assets/icons/teeth.svg";

import medicineService from "../assets/services/medicine.svg";
import heartService from "../assets/services/heart.svg";
import labService from "../assets/services/lab.svg";
import opdService from "../assets/services/opd.svg";
import stomachService from "../assets/services/stomach.svg";
import dentistService from "../assets/services/dentist.svg";

export const feedbacks = [
  {
    name: "John Doe",
    review:
      "The facilities at the health club are truly exceptional. From the state-of-the-art gym equipment to the beautifully maintained swimming pool, every aspect of this place is top-notch. The staff is incredibly friendly and always willing to assist with any questions or needs. I've been a member for over a year now and have seen a significant improvement in my overall fitness and well-being. The variety of classes offered ensures that there's something for everyone, and I especially love the yoga and pilates sessions. Highly recommend to anyone looking to improve their health in a supportive and professional environment.",
  },
  {
    name: "Jane Smith",
    review:
      "I have been going to this health club for the past six months, and it has been a fantastic experience. The gym is always clean and well-organized, with plenty of equipment available even during peak hours. The variety of classes, from spin to Zumba, keeps me motivated and engaged. The instructors are knowledgeable and enthusiastic, creating a positive and energetic atmosphere. Additionally, the locker rooms are spacious and well-maintained, which makes getting ready before and after workouts a breeze. I would highly recommend this health club to anyone looking to improve their fitness.",
  },
  {
    name: "Alice Johnson",
    review:
      "Joining this health club has been one of the best decisions I've made for my health. The equipment is always in excellent condition, and there's a wide range of options to suit any workout routine. The staff is incredibly helpful and friendly, always ready to offer advice or assistance. The classes are varied and cater to all fitness levels, which is great for someone like me who likes to mix up their routine. The atmosphere is welcoming and supportive, making it a great place to achieve my fitness goals.",
  },
  {
    name: "Bob Brown",
    review:
      "As someone who has struggled with fitness motivation, this health club has been a game-changer for me. The personal trainers are outstanding and really take the time to understand your goals and create a personalized workout plan. Their expertise and encouragement have helped me stay committed and see real results. The variety of equipment and classes means that I never get bored, and the sense of community here is truly special. Everyone, from the staff to the other members, is supportive and friendly. It's a fantastic environment to get fit and stay healthy.",
  },
  {
    name: "Mary Davis",
    review:
      "I've been a member of this health club for a little over a year now, and I couldn't be happier with my experience. The facilities are top-notch, from the modern gym equipment to the relaxing spa services. The yoga classes are my favorite; the instructors are very knowledgeable and create a peaceful and encouraging environment. The staff is always friendly and willing to help with any questions or concerns. It's clear that they care about their members' well-being. I highly recommend this health club to anyone looking to improve their health and fitness in a positive setting.",
  },
  {
    name: "James Wilson",
    review:
      "The health club offers an outstanding experience from the moment you walk in the door. The front desk staff is always welcoming and efficient, making check-in a breeze. The gym area is spacious and equipped with a wide range of machines and free weights, catering to all types of workouts. I particularly appreciate the flexible hours, which allow me to fit in a workout regardless of my busy schedule. The trainers are highly skilled and provide excellent guidance, ensuring that I make the most of my time at the gym. Overall, this health club is a fantastic place to pursue your fitness goals.",
  },
  {
    name: "Patricia Taylor",
    review:
      "I've been a member of several gyms over the years, but this health club stands out as the best by far. The membership fees are very reasonable, especially considering the quality of the facilities and services offered. The group fitness classes are varied and engaging, with something for everyone. I particularly enjoy the high-intensity interval training (HIIT) classes, which are both challenging and fun. The instructors are motivating and knowledgeable, and the atmosphere is always positive. Additionally, the club is kept immaculately clean, which is a huge plus. I highly recommend this health club to anyone looking for a comprehensive fitness experience.",
  },
  {
    name: "Michael Martinez",
    review:
      "The group fitness classes at this health club are fantastic. I love the variety and as someone who has struggled with fitness motivation, this health club has been a game-changer for me",
  },
];

export const whyChooseUs = [
  {
    title: "Our Commitment to Excellence",
    description:
      "At our medical facility, we prioritize patient care, offering state-of-the-art technology and a team of highly skilled professionals dedicated to your health and well-being. Our compassionate approach ensures personalized treatment plans tailored to each individual's needs.",
  },
  {
    title: "Specialized Medical Expertise",
    description:
      "Our team consists of experienced specialists who are leaders in their respective fields. We ensure that our patients receive the best possible care through continuous education and training of our staff.",
  },
  {
    title: "Comprehensive Healthcare Services",
    description:
      "We offer a wide range of medical services under one roof, from routine check-ups to complex surgeries. Our integrated approach ensures that all your healthcare needs are met with the highest standards.",
  },
  {
    title: "Patient-Focused Approach",
    description:
      "Our patient-centered care philosophy means that we listen to our patients and involve them in their own care decisions. We strive to create a supportive and healing environment for every patient.",
  },
];

export const contact = [
  {
    id: 1,
    title: "Emergency",
    cta: "123456789",
    img: call,
  },
  {
    id: 2,
    title: "Address",
    cta: "123 West Wood, US",
    img: map,
  },
  {
    id: 3,
    title: "Email",
    cta: "abc@abc.com",
    img: mail,
  },
  {
    id: 4,
    title: "Working Hours",
    cta: "Mon - Fri (9AM-6PM)",
    img: hours,
  },
];
export const services = [
  {
    id: 1,
    title: "Medicine",
    desc: "Medical information written to help you make informed decisions about your health concerns, ensuring you understand your medical options and treatment plans thoroughly. Our comprehensive resources cover a wide range of conditions and treatments, providing clarity and guidance to empower your healthcare journey.",
    img: medicineService,
  },
  {
    id: 2,
    title: "Heart",
    desc: "Explore comprehensive information on cardiology, including heart health tips and guidelines to maintain a healthy cardiovascular system for longevity and overall well-being. Learn about preventive measures, treatment options, and lifestyle changes that can support your heart health journey.",
    img: heartService,
  },
  {
    id: 3,
    title: "Lab",
    desc: "Our laboratory services offer essential diagnostic tests designed to help identify and manage various health conditions accurately and efficiently. From routine screenings to specialized tests, our state-of-the-art facilities ensure reliable results and timely treatment decisions.",
    img: labService,
  },
  {
    id: 4,
    title: "OPD",
    desc: "Outpatient services provide convenient and efficient healthcare solutions, allowing patients to receive medical care without hospitalization. Our OPD services prioritize accessibility, comfort, and personalized treatment plans tailored to meet individual healthcare needs.",
    img: opdService,
  },
  {
    id: 5,
    title: "Stomach",
    desc: "Discover gastroenterology services focused on diagnosing and treating digestive system disorders. Our specialized care aims to optimize digestive health, alleviate discomfort, and enhance overall well-being through comprehensive evaluation and treatment.",
    img: stomachService,
  },
  {
    id: 6,
    title: "Dentist",
    desc: "Comprehensive dental services ensure your oral health with preventive care, treatments, and maintenance for a healthy smile and improved dental hygiene. Our dedicated team provides personalized dental solutions to support long-term oral well-being and confidence.",
    img: dentistService,
  },
];

export const servicesGrid = [
  {
    id: 1,
    title: "Medicine",
    desc: "Medical information written for you to make informed decisions about your health concerns, ensuring you understand your medical options.",
    img: medicine,
  },
  {
    id: 2,
    title: "Heart",
    desc: "Comprehensive information on cardiology, including heart health tips and guidelines to maintain a healthy cardiovascular system.",
    img: heart,
  },
  {
    id: 3,
    title: "Lab",
    desc: "Laboratory services providing essential diagnostic tests to help identify and manage various health conditions accurately and efficiently.",
    img: lab,
  },
  {
    id: 4,
    title: "OPD",
    desc: "Outpatient services designed to offer convenient and efficient healthcare solutions, enabling patients to receive medical care without hospitalization.",
    img: opd,
  },
  {
    id: 5,
    title: "Stomach",
    desc: "Gastroenterology services focused on diagnosing and treating digestive system disorders, ensuring optimal digestive health and well-being.",
    img: stomach,
  },
  {
    id: 6,
    title: "Dentist",
    desc: "Comprehensive dental services to ensure your oral health, including preventive care, treatments, and maintenance for a healthy smile.",
    img: teeth,
  },
];
