function analyzeEmployeeWithMath(employeeData) {
    // Education
    let educationScore = 0;
    if (employeeData.degree === "Bachelor's Degree") {
        educationScore += 50;
    }
    if (employeeData.college_status === "No") {
        educationScore += 20;
    }

    // Work Experience
    let workExperienceScore = 0;
    if (employeeData.position === "Professor") {
        workExperienceScore += 80;
    }
    // Assuming the reputation of the company
    if (employeeData.company_name === "NYU Shanghai") {
        workExperienceScore += 70;
    }
    // Calculating score based on tenure (start date - end date)
    const startDate = new Date(employeeData.start_date);
    const endDate = employeeData.is_current_job ? new Date() : new Date(employeeData.end_date);
    const tenureMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    // Assuming 10 years as a good tenure
    workExperienceScore += Math.min((tenureMonths / (10 * 12)) * 90, 90);

    // Personality Traits
    const personalityTraitsScore = {
        agreeableness: employeeData.color_agreeableness * 20, // Scaling to 0-100
        conscientiousness: employeeData.color_conscientiousness * 20, // Scaling to 0-100
        creativity: employeeData.color_creativity * 20, // Scaling to 0-100
        extraversion: employeeData.color_extraversion * 20, // Scaling to 0-100
        neuroticism: employeeData.color_neuroticism * 20, // Scaling to 0-100
        openness_to_experience: employeeData.color_openness_to_experience * 20, // Scaling to 0-100
        satisfaction_with_life_perceptions: employeeData.color_satisfaction_with_life_perceptions * 20 // Scaling to 0-100
    };

    // Demographic Information
    let demographicInfoScore = 0;
    // Considering only city and state for simplicity
    demographicInfoScore += 20;

    // Other Information
    let otherInfoScore = 0;
    // Assuming equal importance for all other info
    otherInfoScore += 30;

    // Calculating total score
    const totalScore = (educationScore + workExperienceScore + 
        personalityTraitsScore.agreeableness + personalityTraitsScore.conscientiousness +
        personalityTraitsScore.creativity + personalityTraitsScore.extraversion +
        personalityTraitsScore.neuroticism + personalityTraitsScore.openness_to_experience +
        personalityTraitsScore.satisfaction_with_life_perceptions + demographicInfoScore + otherInfoScore) / 11;

    return Math.round(totalScore); // Rounding off to nearest integer
}

// Call the function to analyze the employee data
const estimation = analyzeEmployeeWithMath(employeeData);

// Log the overall estimation
console.log("Overall Estimation (0-100):", estimation);
