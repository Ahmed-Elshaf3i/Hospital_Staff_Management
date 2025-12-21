const doctors = [
  {
    id: 1,
    name: "John Doe",
    role: "Cardiologist",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Dr. John Doe is a highly skilled professional with over 10 years of experience in cardiology. He is dedicated to providing the best care for his patients.",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
    profile: {
      education: "MD from Harvard Medical School, Residency at Johns Hopkins Hospital",
      experience: "15+ years in cardiology, specializing in interventional cardiology",
      awards: "American Heart Association Excellence Award, Top Cardiologist 2023",
      languages: "English, Spanish",
      specializations: "Interventional Cardiology, Heart Failure Management, Preventive Cardiology",
      publications: "Author of 25+ research papers in leading cardiology journals",
      philosophy: "Every heartbeat matters. I believe in personalized care that combines cutting-edge technology with compassionate understanding.",
      interests: "Medical research, patient education, community health programs"
    }
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Pediatrician",
    img: "https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Dr. Jane Smith specializes in pediatric care, ensuring the health and well-being of children from infancy through adolescence.",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    profile: {
      education: "MD from Stanford University School of Medicine, Pediatric Residency at Children's Hospital Boston",
      experience: "12+ years in pediatrics, focusing on developmental pediatrics and preventive care",
      awards: "Pediatric Excellence Award, Community Health Champion 2024",
      languages: "English, French, Basic Sign Language",
      specializations: "Developmental Pediatrics, Adolescent Medicine, Preventive Care",
      publications: "Co-author of 'Modern Pediatric Care' textbook, 18 research articles",
      philosophy: "Children are our future. I strive to create a nurturing environment where young patients feel safe and understood.",
      interests: "Child psychology, family counseling, pediatric research, community outreach"
    }
  },
  {
    id: 3,
    name: "Peter Jones",
    role: "Neurologist",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Dr. Peter Jones is an expert neurologist focusing on disorders of the nervous system. He is known for his compassionate approach.",
    social: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
    profile: {
      education: "MD from University of Pennsylvania, Neurology Fellowship at Mayo Clinic",
      experience: "18+ years in neurology, specializing in neurodegenerative diseases",
      awards: "Neurology Innovation Award, Patient Care Excellence 2022",
      languages: "English, German",
      specializations: "Neurodegenerative Diseases, Stroke Management, Epilepsy Treatment",
      publications: "Lead author of 30+ publications in neurology journals, Editor of Neurology Today",
      philosophy: "The brain is our most complex organ. I approach each case with scientific rigor and genuine empathy.",
      interests: "Neuroscience research, medical education, patient advocacy, brain health awareness"
    }
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Ophthalmologist",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Dr. Emily Davis is a leading ophthalmologist specializing in eye care, vision correction, and advanced eye surgeries.",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
    profile: {
      education: "MD from Johns Hopkins University, Ophthalmology Residency at Wills Eye Hospital",
      experience: "14+ years in ophthalmology, pioneering laser vision correction techniques",
      awards: "Vision Excellence Award, Ophthalmology Innovation Prize 2023",
      languages: "English, Italian",
      specializations: "Refractive Surgery, Cataract Surgery, Glaucoma Treatment, Pediatric Ophthalmology",
      publications: "Author of 'Advanced Ophthalmic Surgery Techniques', 22 peer-reviewed articles",
      philosophy: "Sight is precious. I combine advanced technology with personalized care to preserve and enhance vision.",
      interests: "Vision research, surgical innovation, patient education, global eye health initiatives"
    }
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "Dentist",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Dr. Michael Brown provides comprehensive dental care, from routine check-ups to advanced restorative procedures.",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    profile: {
      education: "DDS from University of California San Francisco, Advanced Prosthodontics Training",
      experience: "16+ years in dentistry, specializing in cosmetic and restorative dentistry",
      awards: "Dental Excellence Award, Community Oral Health Champion 2024",
      languages: "English, Portuguese",
      specializations: "Cosmetic Dentistry, Dental Implants, Oral Surgery, Preventive Dentistry",
      publications: "Contributing author to 'Modern Dental Practice', 15 clinical case studies",
      philosophy: "A healthy smile is the foundation of overall health. I create beautiful, functional smiles with care and precision.",
      interests: "Dental technology, patient comfort, continuing education, community dental outreach"
    }
  },
  {
    id: 6,
    name: "Sarah Wilson",
    role: "Psychiatrist",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Dr. Sarah Wilson specializes in mental health, offering therapy and treatment for various psychological conditions.",
    social: {
      facebook: "https://facebook.com",
      github: "https://github.com",
    },
    profile: {
      education: "MD from Yale School of Medicine, Psychiatry Residency at Massachusetts General Hospital",
      experience: "13+ years in psychiatry, specializing in mood disorders and psychotherapy",
      awards: "Mental Health Advocacy Award, Psychiatry Excellence 2023",
      languages: "English, Swedish",
      specializations: "Mood Disorders, Anxiety Treatment, Psychotherapy, Cognitive Behavioral Therapy",
      publications: "Author of 'Modern Approaches to Mental Health', 20 research publications",
      philosophy: "Mental health is as important as physical health. I provide a safe, non-judgmental space for healing and growth.",
      interests: "Mental health research, therapy innovation, community mental health programs, mindfulness practices"
    }
  },
  {
    id: 7,
    name: "Ahmed Al-Rashid",
    role: "Orthopedic Surgeon",
    img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Dr. Ahmed Al-Rashid specializes in orthopedic surgery, focusing on bones, joints, and musculoskeletal disorders.",
    social: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
    profile: {
      education: "MD from King Saud University, Orthopedic Surgery Fellowship at Cleveland Clinic",
      experience: "17+ years in orthopedic surgery, specializing in joint replacement and sports medicine",
      awards: "Orthopedic Excellence Award, Sports Medicine Innovation 2024",
      languages: "Arabic, English, French",
      specializations: "Joint Replacement, Sports Medicine, Arthroscopic Surgery, Trauma Surgery",
      publications: "Lead surgeon in 500+ joint replacements, 25 research publications in orthopedic journals",
      philosophy: "Movement is life. I restore mobility and improve quality of life through advanced surgical techniques.",
      interests: "Sports medicine research, surgical innovation, patient rehabilitation, orthopedic education"
    }
  },
  {
    id: 8,
    name: "Fatima Al-Zahra",
    role: "Dermatologist",
    img: "https://images.unsplash.com/photo-1594824486539-1fe81f6d8d0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Dr. Fatima Al-Zahra is an expert dermatologist providing care for skin, hair, and nail conditions.",
    social: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
    profile: {
      education: "MD from Cairo University, Dermatology Fellowship at Harvard Medical School",
      experience: "11+ years in dermatology, specializing in cosmetic dermatology and skin cancer",
      awards: "Dermatology Innovation Award, Skin Health Excellence 2023",
      languages: "Arabic, English, French",
      specializations: "Cosmetic Dermatology, Skin Cancer Treatment, Laser Therapy, Hair Restoration",
      publications: "Author of 'Advanced Dermatological Procedures', 19 clinical research papers",
      philosophy: "Healthy skin reflects inner wellness. I combine medical expertise with aesthetic artistry for beautiful, healthy skin.",
      interests: "Skin research, cosmetic innovation, patient education, dermatological technology"
    }
  },
  {
    id: 9,
    name: "Omar Al-Hassan",
    role: "ENT Specialist",
    img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Dr. Omar Al-Hassan specializes in ear, nose, and throat disorders, offering comprehensive ENT care.",
    social: {
      facebook: "https://facebook.com",
      github: "https://github.com",
    },
    profile: {
      education: "MD from American University of Beirut, ENT Fellowship at Johns Hopkins Hospital",
      experience: "15+ years in otolaryngology, specializing in head and neck surgery",
      awards: "ENT Excellence Award, Head & Neck Surgery Innovation 2024",
      languages: "Arabic, English, Turkish",
      specializations: "Head & Neck Surgery, Otology, Rhinology, Laryngology, Pediatric ENT",
      publications: "Co-author of 'Comprehensive ENT Surgery', 28 research publications",
      philosophy: "Clear communication and healthy senses enrich life. I provide expert care for all ENT conditions.",
      interests: "ENT research, surgical techniques, hearing conservation, voice disorders treatment"
    }
  },
  {
    id: 10,
    name: "Layla Al-Khalidi",
    role: "Gynecologist",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Dr. Layla Al-Khalidi specializes in women's health, including reproductive care and gynecology.",
    social: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
    profile: {
      education: "MD from University of Jordan, Gynecology Fellowship at Mayo Clinic",
      experience: "14+ years in obstetrics and gynecology, specializing in reproductive endocrinology",
      awards: "Women's Health Excellence Award, Gynecology Innovation 2023",
      languages: "Arabic, English, German",
      specializations: "Reproductive Endocrinology, Minimally Invasive Surgery, High-Risk Pregnancy, Fertility Treatment",
      publications: "Author of 'Modern Gynecology Practice', 22 clinical research papers",
      philosophy: "Women's health is paramount. I provide comprehensive, compassionate care throughout all life stages.",
      interests: "Women's health research, fertility preservation, patient advocacy, community health education"
    }
  },
  {
    id: 11,
    name: "Khalid Al-Mansoori",
    role: "Urologist",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Dr. Khalid Al-Mansoori is a urologist focusing on urinary tract and male reproductive system disorders.",
    social: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
    profile: {
      education: "MD from UAE University, Urology Fellowship at Cleveland Clinic",
      experience: "16+ years in urology, specializing in minimally invasive urologic surgery",
      awards: "Urology Excellence Award, Minimally Invasive Surgery Innovation 2024",
      languages: "Arabic, English, Hindi",
      specializations: "Minimally Invasive Surgery, Kidney Stone Treatment, Prostate Disorders, Male Infertility",
      publications: "Lead author in 30+ urology research papers, Editor of UAE Urology Journal",
      philosophy: "Urologic health affects quality of life profoundly. I provide advanced, compassionate care with dignity.",
      interests: "Urologic research, surgical innovation, patient education, men's health advocacy"
    }
  },
  {
    id: 12,
    name: "Nadia Al-Farsi",
    role: "Gastroenterologist",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Dr. Nadia Al-Farsi specializes in digestive system disorders, providing expert gastroenterology care.",
    social: {
      facebook: "https://facebook.com",
      github: "https://github.com",
    },
    profile: {
      education: "MD from Sultan Qaboos University, Gastroenterology Fellowship at Massachusetts General Hospital",
      experience: "13+ years in gastroenterology, specializing in advanced endoscopy and liver diseases",
      awards: "Gastroenterology Excellence Award, Endoscopy Innovation 2023",
      languages: "Arabic, English, Urdu",
      specializations: "Advanced Endoscopy, Liver Diseases, Inflammatory Bowel Disease, Gastrointestinal Oncology",
      publications: "Author of 'Advanced Gastrointestinal Procedures', 24 research publications",
      philosophy: "Digestive health is fundamental to overall wellness. I provide comprehensive care with cutting-edge technology.",
      interests: "GI research, endoscopic innovation, patient nutrition education, digestive health awareness"
    }
  },
  {
    id: 13,
    name: "Youssef Al-Mahmoud",
    role: "Oncologist",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Dr. Youssef Al-Mahmoud specializes in cancer treatment and oncology, providing compassionate care to patients.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    profile: {
      education: "MD from King Abdulaziz University, Oncology Fellowship at MD Anderson Cancer Center",
      experience: "19+ years in oncology, specializing in hematologic malignancies and immunotherapy",
      awards: "Oncology Excellence Award, Cancer Research Innovation 2024",
      languages: "Arabic, English, Persian",
      specializations: "Hematologic Oncology, Immunotherapy, Targeted Therapies, Palliative Care",
      publications: "Lead researcher in 40+ oncology studies, Editor of Middle East Oncology Journal",
      philosophy: "Cancer is a battle we face together. I provide hope, advanced treatment, and unwavering support.",
      interests: "Cancer research, immunotherapy development, patient support programs, oncology education"
    }
  },
  {
    id: 14,
    name: "Sara Al-Hamad",
    role: "Radiologist",
    img: "https://images.unsplash.com/photo-1594824486539-1fe81f6d8d0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Dr. Sara Al-Hamad is an expert radiologist specializing in medical imaging and diagnostic radiology.",
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
    profile: {
      education: "MD from Kuwait University, Radiology Fellowship at Brigham and Women's Hospital",
      experience: "12+ years in radiology, specializing in advanced imaging techniques and interventional radiology",
      awards: "Radiology Innovation Award, Imaging Excellence 2023",
      languages: "Arabic, English, French",
      specializations: "Advanced Imaging, Interventional Radiology, Breast Imaging, Musculoskeletal Radiology",
      publications: "Author of 'Modern Radiology Techniques', 21 research publications in radiology journals",
      philosophy: "Clear images lead to clear diagnoses. I provide accurate, timely interpretations that guide patient care.",
      interests: "Imaging technology, radiology research, medical education, radiation safety advocacy"
    }
  },
  {
    id: 15,
    name: "Ahmed Al-Sayed",
    role: "Emergency Medicine Physician",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Dr. Ahmed Al-Sayed specializes in emergency medicine, providing critical care in urgent situations.",
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
    profile: {
      education: "MD from Alexandria University, Emergency Medicine Fellowship at Hennepin County Medical Center",
      experience: "17+ years in emergency medicine, specializing in trauma care and critical care medicine",
      awards: "Emergency Medicine Excellence Award, Trauma Care Innovation 2024",
      languages: "Arabic, English, Basic Spanish",
      specializations: "Trauma Care, Critical Care Medicine, Disaster Medicine, Emergency Ultrasound",
      publications: "Co-author of 'Emergency Medicine Protocols', 26 research publications in emergency medicine",
      philosophy: "Every second counts in emergencies. I provide rapid, expert care with calm confidence and compassion.",
      interests: "Emergency response systems, trauma research, disaster preparedness, emergency medical education"
    }
  },
  {
    id: 16,
    name: "Laila Al-Zahrani",
    role: "Family Medicine Physician",
    img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Dr. Laila Al-Zahrani provides comprehensive family medicine care for patients of all ages.",
    social: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
    profile: {
      education: "MD from King Faisal University, Family Medicine Residency at University of Toronto",
      experience: "14+ years in family medicine, specializing in preventive care and chronic disease management",
      awards: "Family Medicine Excellence Award, Community Health Champion 2023",
      languages: "Arabic, English, Urdu",
      specializations: "Preventive Medicine, Chronic Disease Management, Geriatric Care, Women's Health",
      publications: "Author of 'Family Medicine Practice Guide', 18 community health research papers",
      philosophy: "Family medicine is about caring for the whole person throughout life. I build lasting relationships with patients and families.",
      interests: "Preventive medicine, community health, patient education, family-centered care research"
    }
  },
];