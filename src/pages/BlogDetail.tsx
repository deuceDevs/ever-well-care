import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const blogDetails = [
  {
    id: 1,
    title:
      "Empowering Health: Raising Awareness About Cervical and Breast Cancer",
    author: "Joana De Guzman",
    date: "May 5, 2025",
    image: "/assets/joanaBlog.jpg",
    content: [
      {
        type: "heading",
        level: 1,
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "Cancer remains one of the leading causes of death worldwide, but early detection and education can significantly improve survival rates. Among the most common and preventable forms of cancer affecting women are cervical and breast cancer. Raising awareness about these diseases is not just about spreading information—it's about saving lives. This blog aims to educate, encourage screenings, and foster supportive conversations around these critical health issues.",
      },
      {
        type: "heading",
        level: 2,
        text: "Understanding Breast Cancer",
      },
      {
        type: "paragraph",
        text: "Breast cancer occurs when abnormal cells in the breast grow uncontrollably. It is the most commonly diagnosed cancer among women globally. While it can also affect men, women are at a significantly higher risk.",
      },
      {
        type: "list",
        items: [
          "1 in 8 women will be diagnosed with breast cancer in their lifetime.",
          "Early-stage breast cancer has a 90% or higher survival rate.",
          "Risk factors include age, genetics (e.g., BRCA1 and BRCA2 genes), lifestyle, and hormone exposure.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Early Detection Saves Lives",
      },
      {
        type: "paragraph",
        text: "Regular breast self-exams, clinical exams, and mammograms are essential. Women over the age of 40 are generally recommended to have yearly or biennial mammograms, but those with higher risk should start earlier.",
      },
      {
        type: "heading",
        level: 2,
        text: "Understanding Cervical Cancer",
      },
      {
        type: "paragraph",
        text: "Cervical cancer begins in the cells lining the cervix—the lower part of the uterus. Almost all cases are caused by persistent infection with certain types of human papillomavirus (HPV).",
      },
      {
        type: "list",
        items: [
          "It's one of the most preventable cancers due to the effectiveness of HPV vaccines and routine screening.",
          "Pap smears and HPV tests can detect precancerous changes early.",
          "Most cases occur in women who have not been regularly screened.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Prevention Through Vaccination and Screening",
      },
      {
        type: "paragraph",
        text: "The HPV vaccine is recommended for both girls and boys starting as early as age 9, ideally before they become sexually active. Regular Pap tests starting at age 21 can catch abnormalities before they develop into cancer.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why Awareness Matters",
      },
      {
        type: "paragraph",
        text: "Awareness leads to early detection and improved treatment outcomes. It reduces stigma surrounding cancer discussions and empowers individuals to take charge of their health. It also increases support for funding, research, and accessible healthcare.",
      },
      {
        type: "heading",
        level: 2,
        text: "How You Can Make a Difference",
      },
      {
        type: "list",
        items: [
          "Educate Yourself and Others — Share facts, bust myths, and encourage informed decisions.",
          "Get Screened — Stay up to date with Pap smears, HPV tests, and mammograms.",
          "Support Research and Charities — Donate or volunteer with organizations fighting women's cancers.",
          "Advocate for Access — Ensure that all women have access to vaccines and screening, regardless of background.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Cervical and breast cancers are two of the most preventable and treatable forms of cancer when detected early. Knowledge truly is power. Let's commit to spreading awareness, encouraging regular screenings, and supporting those affected by these diseases. Together, we can save lives—one conversation, one screening, and one act of awareness at a time.",
      },
    ],
    references: [
      "https://cervivor.org/breaking-the-silence-the-powerful-connection-between-breast-and-cervical-cancer/",
      "https://www.koninghealth.com/news-insights/blog/cervical-and-breast-cancer-awareness",
    ],
  },
  {
    id: 2,
    title: "Immunization Awareness for Children and Mothers",
    author: "Alexa Bernardo",
    date: "May 5, 2025",
    image: "/assets/alexaBlog.jpg",
    content: [
      {
        type: "heading",
        level: 1,
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "Immunization is one of the most effective and life-saving public health interventions worldwide. In the Philippines, routine vaccination protects children, infants, and even unborn babies from life-threatening diseases. By increasing awareness about the importance, schedule, and safety of vaccines, communities can reduce child mortality, improve maternal health outcomes, and prevent outbreaks of vaccine-preventable diseases. This article aims to educate families, encourage timely vaccinations, and support national health goals through accessible information.",
      },
      {
        type: "heading",
        level: 2,
        text: "Understanding Childhood and Infant Immunization",
      },
      {
        type: "paragraph",
        text: "Vaccines help a child's immune system fight dangerous infections before they encounter them naturally. The Department of Health (DOH) provides free routine immunization under the National Immunization Program (NIP), which begins at birth and continues through early childhood.",
      },
      {
        type: "heading",
        level: 2,
        text: "Vaccines and Schedule for Infants and Children",
      },
      {
        type: "table",
        headers: ["Age", "Vaccine"],
        rows: [
          [
            "At Birth",
            "BCG (for tuberculosis), Hepatitis B-BD (within 24 hrs of birth)",
          ],
          [
            "6 Weeks",
            "Pentavalent (DPT-HepB-Hib) — 1st dose, OPV — 1st dose, PCV — 1st dose, Rotavirus — 1st dose",
          ],
          [
            "10 Weeks",
            "Pentavalent — 2nd dose, OPV — 2nd dose, PCV — 2nd dose, Rotavirus — 2nd dose",
          ],
          [
            "14 Weeks",
            "Pentavalent — 3rd dose, OPV — 3rd dose, IPV, PCV — 3rd dose",
          ],
          [
            "9 Months",
            "Measles-Rubella (MR), Japanese Encephalitis (JE) (in selected areas)",
          ],
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Maternal Immunization",
      },
      {
        type: "paragraph",
        text: "Immunizing mothers during pregnancy provides direct protection to the mother and passive immunity to the baby. The most common vaccine for pregnant women in the Philippines is the Tetanus Toxoid (TT).",
      },
      {
        type: "table",
        headers: ["Dose", "Schedule"],
        rows: [
          ["TT1", "As early as possible during pregnancy"],
          ["TT2", "At least 4 weeks after TT1"],
          ["TT3", "At least 6 months after TT2 or during next pregnancy"],
          ["TT4", "At least 1 year after TT3"],
          ["TT5", "At least 1 year after TT4 — provides lifetime protection"],
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Why Awareness Matters",
      },
      {
        type: "paragraph",
        text: "Raising awareness on immunization leads to disease prevention and reduced childhood mortality. It enables safer pregnancies and deliveries, especially in low-resource communities, and builds stronger public trust in the health system.",
      },
      {
        type: "heading",
        level: 2,
        text: "Prevention Through Public Health Programs",
      },
      {
        type: "paragraph",
        text: "Through barangay health stations and Rural Health Units (RHUs), the Philippine government ensures free and accessible vaccination services. Outreach programs, health campaigns, and school-based immunizations complement these efforts.",
      },
    ],
    references: [
      "Department of Health — Philippines. (n.d.). National Immunization Program (NIP). https://doh.gov.ph/national-immunization-program",
      "World Health Organization (WHO). (2023). Routine Immunization Schedule for the Philippines. https://www.who.int/",
      "UNICEF Philippines. (n.d.). Routine Immunization and Child Health. https://www.unicef.org/philippines",
      "Republic Act No. 10152. Mandatory Infants and Children Health Immunization Act of 2011. https://lawphil.net/",
    ],
  },
  {
    id: 3,
    title: "Balance for Two: Healthy Habits for Moms and Kids",
    author: "Angeline Nicole Ortega",
    date: "May 5, 2025",
    image: "/assets/nicoleBlog.jpg",
    content: [
      {
        type: "heading",
        level: 1,
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "Building healthy habits is one of the most powerful gifts moms can share with their children. Simple daily routines—like getting enough rest, moving the body, eating well, and spending screen-free time together—don't just support physical health. They strengthen emotional bonds, reduce stress, and set the stage for lifelong wellness.",
      },
      {
        type: "paragraph",
        text: "According to the Centers for Disease Control and Prevention (CDC, 2023), encouraging healthy behaviors early in life—including proper nutrition, regular physical activity, and limited screen time—can help prevent chronic diseases and promote healthy development in children.",
      },
      {
        type: "heading",
        level: 2,
        text: "Ensuring Moms and Kids Get the Rest They Need",
      },
      {
        type: "paragraph",
        text: "Sleep fuels everything—from mood and memory to growth and recovery. Kids need more sleep than adults, and moms need to prioritize rest to keep up with daily demands.",
      },
      {
        type: "list",
        items: [
          "Stick to regular sleep and wake times",
          "Create a calming bedtime routine",
          "Avoid screens at least 1 hour before bed",
          "Keep bedrooms cool, dark, and quiet",
          "Share nighttime duties when possible",
        ],
      },
      {
        type: "paragraph",
        text: "Kids typically need 9–14 hours of sleep depending on age, while moms need at least 7 hours to recharge. Prioritizing rest helps families feel energized, focused, and ready to take on the day—together.",
      },
      {
        type: "heading",
        level: 2,
        text: "Bond & Burn: Enjoyable Exercises for Moms and Kids",
      },
      {
        type: "paragraph",
        text: "Exercise doesn't need a gym—it can be playful, creative, and something the whole family enjoys. Making physical activity part of your daily routine builds strong bodies, boosts mood, and teaches kids that staying active is a lifelong healthy habit.",
      },
      {
        type: "list",
        items: [
          "Dance parties or stretches to start the day with energy and fun",
          "Family walks or bike rides to explore outdoors",
          "Classic games like tag, hopscotch, or jump rope for fun and coordination",
          "DIY obstacle course with household items for adventure indoors",
          "Family yoga for gentle stretching and relaxation",
          "Gardening to get light exercise while connecting with nature",
          "Swim time for a full-body workout and fun",
        ],
      },
      {
        type: "paragraph",
        text: "Just 15–30 minutes of movement daily can boost heart health, reduce stress, and improve sleep—for both moms and kids.",
      },
      {
        type: "heading",
        level: 2,
        text: "Reconnecting Through Real-Life Moments",
      },
      {
        type: "paragraph",
        text: "Technology has its place, but nothing replaces real, face-to-face time. Activities that bring moms and kids together in the moment help build trust, creativity, and emotional resilience.",
      },
      {
        type: "list",
        items: [
          "Doodle dinners: Put paper and crayons on the table to draw while eating and chatting",
          "Shadow play: Make shadow puppets or tell stories using flashlights and cutouts",
          "Window art: Use dry-erase markers to decorate glass surfaces with drawings or messages",
          "Bake and cook together: Share family recipes, decorate cupcakes, or try a themed meal night",
          "Create family rituals: Weekly game night, picnic Sundays, or bedtime stories help create cherished memories",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion: Growing Stronger Together",
      },
      {
        type: "paragraph",
        text: "Healthy habits don't require big changes. It's the consistent, small steps—sleeping well, staying active, and connecting deeply—that lead to long-term health and happiness. Every bedtime story, every morning walk, every tech-free dinner—it all adds up. Moms who lead by example teach their kids that wellness is a family value, not just a personal goal.",
      },
    ],
    references: [
      "Tips to support healthy routines for children and teens. (2024, December 20). Healthy Weight and Growth. https://www.cdc.gov/healthy-weight-growth/tips-parents-caregivers",
      "Kingshott, R. (2024, December 30). CDC publishes new estimates of U.S. adult sleep duration. American Academy of Sleep Medicine. https://aasm.org/cdc-publishes-new-estimates-of-u-s-adult-sleep-duration/",
      "Madrecha, J., DO. (2024, March 7). Why a Sleep Schedule is Important for Kids. Ochsner Health System. https://blog.ochsner.org/articles/why-a-sleep-schedule-is-important-for-kids",
      "Tenety, E. (2024b, November 28). Why moms need to prioritize sleep—and how to make it happen. Motherly. https://www.mother.ly/health-wellness/importance-of-sleep-womens-health",
      "Utah State University. (2024, June 17). Active Family Ideas: 10 Fun activities to keep your kids moving. USU. https://extension.usu.edu/createbetterhealth/kids-create-blog/activefamilyideas",
      "Parents of Young Children: Why your screen time matters, too. (n.d.). HealthyChildren.org. https://www.healthychildren.org/English/family-life/Media/Pages/Parents-of-Young-Children-Put-Down-Your-Smartphones.aspx",
      "Goodman, L. (2025, April 28). 35 Easy screen free activities for kids — Mother Untitled. Mother Untitled. https://www.motheruntitled.com/blog/easy-screen-free-activities-for-kids",
    ],
  },
  {
    id: 4,
    title: "Preventing and Addressing Childhood Obesity",
    author: "Dannah Morales",
    date: "May 5, 2025",
    image: "/assets/dannahBlog.jpg",
    content: [
      {
        type: "heading",
        level: 1,
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "Childhood obesity is a growing concern worldwide, impacting not only the physical health of children but also their emotional and social well-being. As a parent or caregiver, understanding how to prevent and address childhood obesity is crucial for nurturing a healthy future for your child.",
      },
      {
        type: "heading",
        level: 2,
        text: "Understanding Childhood Obesity",
      },
      {
        type: "paragraph",
        text: "Childhood obesity is defined as excessive body fat accumulation that may negatively affect health. It is measured using the Body Mass Index (BMI) for age and gender. Factors contributing to childhood obesity include poor eating habits, lack of physical activity, genetic factors, and environmental influences.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why Preventing Childhood Obesity Matters",
      },
      {
        type: "paragraph",
        text: "Preventing childhood obesity is vital because it reduces the risk of serious health issues such as type 2 diabetes, heart disease, high blood pressure, and mental health problems like low self-esteem and depression. Early intervention can set the foundation for a healthy lifestyle that lasts into adulthood.",
      },
      {
        type: "heading",
        level: 2,
        text: "Childhood Obesity Causes and Risk Factors",
      },
      {
        type: "list",
        items: [
          "Poor diet: Eating foods high in calories and low in nutrition increases the risk of obesity",
          "Lack of exercise: Sedentary activities don't burn many calories",
          "Genetics and family behaviors: Children with obese parents are more likely to become obese",
          "Socioeconomic factors: Limited access to fresh, healthy foods increases risk",
          "Psychological/emotional issues: Stress can lead to overeating as a coping mechanism",
          "Medications: Certain prescription drugs can increase obesity risk",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Prevention Strategies",
      },
      {
        type: "list",
        items: [
          "Model healthy eating habits: Offer a variety of fruits and vegetables throughout the day",
          "Move more as a Family: Children aged 6–17 need at least 60 minutes of physical activity every day",
          "Set consistent Sleep Routine: Preschoolers need 10–13 hours of sleep daily, kids aged 6–12 need 9–12 hours, and teens 13–17 need 8–10 hours",
          "Replace screen time with family time: Reducing screen time can free up time for family activities",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Addressing Obesity: What to Do if Your Child Is Overweight",
      },
      {
        type: "list",
        items: [
          "Talk to a Doctor: A pediatrician can guide you in understanding your child's weight",
          "Focus on Habits, Not the Scale: Encourage better eating and more movement",
          "Stay Positive: Celebrate effort and progress, not just results",
          "Create a Supportive Environment: Make your home a place where healthy habits are normal and fun",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Childhood obesity is a serious issue that requires the combined effort of families, communities, and policymakers. Early education, access to healthy food, and supportive environments are key to lasting change. By working together, we can help children lead healthier lives and build a better future.",
      },
    ],
    references: [
      "PharmD, J. C. (2023, May 19). A guide to preventing childhood obesity. https://www.medicalnewstoday.com/articles/childhood-obesity-prevention",
      "Preventing Childhood obesity: 6 Things Families Can do. (2024, January 26). Obesity. https://www.cdc.gov/obesity/family-action/index.html",
    ],
  },
  {
    id: 5,
    title:
      "Promoting Dignity, Education, and Well-being: Menstrual Health and Hygiene",
    author: "Rei Tominaga",
    date: "May 5, 2025",
    image: "/assets/reiBlog.jpg",
    content: [
      {
        type: "heading",
        level: 1,
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "Menstruation is a natural physiological process experienced by individuals with a uterus, yet it remains a subject burdened with social stigma, misinformation, and neglect across many cultures and communities. Promoting menstrual health and hygiene is essential not only for individual well-being but also for achieving broader public health, educational, and gender equity goals.",
      },
      {
        type: "heading",
        level: 2,
        text: "Understanding Menstrual Health",
      },
      {
        type: "paragraph",
        text: "Menstrual health refers to a state of complete physical, mental, and social well-being in relation to the menstrual cycle. It extends beyond the mere absence of disease and includes the ability to manage menstruation safely and with dignity.",
      },
      {
        type: "list",
        items: [
          "Possess accurate knowledge about the menstrual cycle",
          "Have access to safe, hygienic, and affordable menstrual products",
          "Are able to change and dispose of these products safely",
          "Are free from menstrual-related stigma and discrimination",
          "Can access healthcare services for menstrual disorders",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Importance of Menstrual Hygiene Management",
      },
      {
        type: "paragraph",
        text: "Proper menstrual hygiene is vital to prevent infections, maintain comfort, and ensure overall health during menstruation. Inadequate menstrual hygiene may lead to reproductive and urinary tract infections, skin irritation, and social withdrawal from school or work.",
      },
      {
        type: "heading",
        level: 2,
        text: "Best Practices for Menstrual Hygiene",
      },
      {
        type: "list",
        items: [
          "Use Appropriate Menstrual Products: Select from sanitary pads, tampons, menstrual cups, or reusable cloth pads",
          "Change Products Regularly: Sanitary pads and tampons should be changed every 4–6 hours",
          "Maintain Genital Hygiene: Wash the genital area with clean water and mild soap at least twice daily",
          "Dispose of Products Safely: Never flush used products down the toilet",
          "Track the Menstrual Cycle: Helps identify irregularities",
          "Adopt a Healthy Lifestyle: Balanced diet and regular exercise help manage symptoms",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Addressing Myths and Misconceptions",
      },
      {
        type: "list",
        items: [
          "Myth: One should not bathe during menstruation (False: bathing helps maintain hygiene)",
          "Myth: Menstruating individuals are impure (False: lacks scientific basis)",
          "Myth: Menstruation should not be discussed openly (False: open communication fosters education)",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Menstrual health and hygiene are fundamental human rights that contribute to overall health, gender equality, and social development. Addressing the challenges surrounding menstruation requires a multi-sectoral approach rooted in education, health services, infrastructure, and policy reform.",
      },
    ],
    references: [
      "World Health Organization (WHO). (2022). Menstrual health. https://www.who.int/news-room/fact-sheets/detail/menstrual-health",
      "UNICEF. (2019). Guidance on Menstrual Health and Hygiene. https://www.unicef.org/documents/guidance-menstrual-health-and-hygiene",
      "UNESCO. (2014). Puberty Education & Menstrual Hygiene Management. https://unesdoc.unesco.org/ark:/48223/pf0000226792",
      "Global Menstrual Collective. (2021). Definition of menstrual health. https://www.globalmenstrualcollective.org/definition",
      "World Bank. (2022). Menstrual Health and Hygiene. https://www.worldbank.org/en/topic/water/brief/menstrual-health-and-hygiene",
    ],
  },
  {
    id: 6,
    title: "Common Childhood Illnesses and First Aid Every Parent Should Know",
    author: "Crizzel San Gabriel",
    date: "May 5, 2025",
    image: "/assets/crizelBlog.jpg",
    content: [
      {
        type: "heading",
        level: 1,
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "Childhood is a time of exploration, growth, and adventure but it also comes with its fair share of illnesses. As children's immune systems are still developing, they are more susceptible to infections and other health issues. Understanding the most common childhood illnesses and knowing how to apply basic first aid can empower parents and caregivers to respond quickly and effectively.",
      },
      {
        type: "heading",
        level: 2,
        text: "Common Cold",
      },
      {
        type: "list",
        items: [
          "Symptoms: Runny nose, sneezing, sore throat, mild fever, coughing",
          "First Aid: Keep your child hydrated, let them rest, use a humidifier, consult a doctor if fever lasts more than 3 days",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Fever",
      },
      {
        type: "list",
        items: [
          "Symptoms: Body temperature over 37.5°C (99.5°F), sweating, chills, irritability",
          "First Aid: Give paracetamol or ibuprofen, sponge with lukewarm water, dress lightly, seek medical help if fever is high",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Diarrhea",
      },
      {
        type: "list",
        items: [
          "Symptoms: Frequent loose stools, stomach cramps, dehydration",
          "First Aid: Offer oral rehydration salts, avoid sugary or greasy foods, seek medical help if diarrhea lasts more than 2 days",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Chickenpox",
      },
      {
        type: "list",
        items: [
          "Symptoms: Itchy red spots that turn into blisters, fever, tiredness",
          "First Aid: Keep nails short, use calamine lotion, keep child isolated, contact a doctor",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Burns (Minor)",
      },
      {
        type: "list",
        items: [
          "First Aid: Cool the area with running water for 10–15 minutes",
          "Do not apply ice, toothpaste, or butter",
          "Cover with clean dressing",
          "Seek medical attention for severe burns",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Every child experiences common illnesses at some point, and while most are mild, proper care and timely first aid can greatly improve comfort and recovery. By staying informed and prepared, you can provide the best care for your child and know when to seek medical help.",
      },
    ],
    references: [
      'American Academy of Pediatrics. "10 Common Childhood Illnesses and Their Treatments." HealthyChildren.org. https://www.healthychildren.org/English/health-issues/conditions/treatments/Pages/10-Common-Childhood-Illnesses-and-Their-Treatments.aspx',
      'Centers for Disease Control and Prevention (CDC). "Childhood Diseases." https://www.cdc.gov',
      'World Health Organization (WHO). "Caring for Children\'s Health." https://www.who.int',
    ],
  },
  {
    id: 7,
    title: "Safety at Home: Injury Prevention and Creating Healthy Spaces",
    author: "Zoe Landayan",
    date: "May 5, 2025",
    image: "/assets/zoeBlog.jpg",
    content: [
      {
        type: "heading",
        level: 1,
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "Home should be a haven—a place where we feel safe and comfortable. However, injuries at home are more common than many realize. From slips and falls to exposure to indoor pollutants, the risk of harm in the home environment is real—but preventable!",
      },
      {
        type: "heading",
        level: 2,
        text: "Common Home Hazards",
      },
      {
        type: "heading",
        level: 3,
        text: "Slips, Trips, and Falls",
      },
      {
        type: "paragraph",
        text: "Falls are a leading cause of injury and death at home, particularly among older adults. Risk factors include wet or slippery surfaces, loose rugs or mats, and cluttered hallways with poor lighting.",
      },
      {
        type: "heading",
        level: 3,
        text: "Fire Hazards",
      },
      {
        type: "paragraph",
        text: "Fires can be devastating and fast-moving. Common sources include cooking mishaps, unattended candles or heaters, and faulty electrical systems.",
      },
      {
        type: "heading",
        level: 3,
        text: "Poisoning",
      },
      {
        type: "paragraph",
        text: "Poisoning often occurs when chemicals, medications, or dangerous plants are ingested—frequently by children. Risk factors include unsecured household cleaners or medications.",
      },
      {
        type: "heading",
        level: 3,
        text: "Poor Indoor Air Quality",
      },
      {
        type: "paragraph",
        text: "Poor air inside your home can contribute to respiratory issues. Key pollutants include mold and mildew, VOCs from paint and cleaning products, and pet dander.",
      },
      {
        type: "heading",
        level: 2,
        text: "Prevention Strategies",
      },
      {
        type: "heading",
        level: 3,
        text: "Prevent Falls",
      },
      {
        type: "list",
        items: [
          "Install grab bars in showers and near toilets",
          "Use non-slip mats in bathrooms and kitchens",
          "Secure rugs with anti-slip backings",
          "Keep hallways clear and well-lit",
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Fire Safety",
      },
      {
        type: "list",
        items: [
          "Install and regularly test smoke and carbon monoxide detectors",
          "Change batteries at least twice a year",
          "Keep a fire extinguisher in the kitchen",
          "Avoid overloading electrical outlets",
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Prevent Poisoning",
      },
      {
        type: "list",
        items: [
          "Store medications and cleaning products in childproof cabinets",
          "Label containers clearly",
          "Dispose of expired medications properly",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Creating Healthy Living Spaces",
      },
      {
        type: "list",
        items: [
          "Improve Air Quality: Open windows regularly, use HEPA-filtered air purifiers",
          "Minimize Allergens: Dust surfaces weekly, wash bedding in hot water",
          "Use Non-Toxic Products: Choose low-VOC paints and cleaners",
          "Declutter for Wellness: Regular decluttering can reduce stress",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Creating a safe and healthy home doesn't require massive changes—it starts with awareness and small, consistent improvements. Involve your whole household in safety planning and regularly walk through your space with a home safety checklist.",
      },
    ],
    references: [
      "https://www.usfa.fema.gov/prevention/",
      "https://poisonhelp.hrsa.gov/sites/default/files/poisonhelp/resources/fact-sheet-happy-home.pdf",
      "https://www.epa.gov/indoor-air-quality-iaq/improving-indoor-air-quality",
      "https://www.safekids.org/safetytips/field_risks/home",
    ],
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogDetails.find((b) => b.id === parseInt(id || "", 10));

  if (!blog) return <div className="p-10 text-center">Blog not found.</div>;

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      {/* Blog Image */}
      <Card className="mb-8 rounded-xl overflow-hidden p-0 ">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full  object-cover"
        />
      </Card>

      {/* Blog Title */}
      <h1 className="text-3xl font-extrabold font-poppins text-purple-950 tracking-tight mb-2">
        {blog.title}
      </h1>

      {/* Blog Info */}
      <p className="text-purple-400 mb-6">
        {blog.date} • {blog.author}
      </p>

      <article className="text-purple-900 leading-relaxed">
        {/* Blog Content */}
        {blog.content.map((block: any, i: number) => {
          if (block.type === "heading") {
            const level = block.level;
            const text = block.text;
            if (level === 1)
              return (
                <h2
                  key={i}
                  className="text-2xl font-semibold mt-8 text-purple-950"
                >
                  {text}
                </h2>
              );
            if (level === 2)
              return (
                <h3
                  key={i}
                  className="text-xl font-medium mt-6 text-purple-950"
                >
                  {text}
                </h3>
              );
            return (
              <h4 key={i} className="text-lg font-medium mt-4 text-purple-950">
                {text}
              </h4>
            );
          }

          if (block.type === "paragraph") {
            return (
              <p key={i} className="mt-4">
                {block.text}
              </p>
            );
          }

          if (block.type === "list" && Array.isArray(block.items)) {
            return (
              <ul key={i} className="list-disc list-inside mt-4 space-y-1">
                {block.items.map((item: string, j: number) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          }

          if (
            block.type === "table" &&
            Array.isArray(block.headers) &&
            Array.isArray(block.rows)
          ) {
            return (
              <div key={i} className="overflow-x-auto mt-6">
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow>
                      {block.headers.map((header: string, j: number) => (
                        <TableHead key={j} className="text-purple-950">
                          {header}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {block.rows.map((row: string[], j: number) => (
                      <TableRow key={j} className="even:bg-gray-50">
                        {row.map((cell: string, k: number) => (
                          <TableCell key={k} className="">
                            {cell}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            );
          }

          return null;
        })}
      </article>

      {/* References Section */}
      {blog.references.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-purple-950 mb-2">
            References
          </h3>
          <ul className="list-disc list-inside text-purple-500 space-y-1">
            {blog.references.map((ref: string, i: number) => (
              <li key={i}>
                <a
                  href={ref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {ref}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Back Button */}
      <div className="mt-8 text-center">
        <Button
          variant="outline"
          className="w-full sm:w-auto"
          onClick={() => window.history.back()}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
