const weekData = [
    { day: 'Monday', sleepHours: 8, screenTime: 7, mood: 'relaxed', caffoeineIntake: 1, focusLevel: 8 },
    { day: 'Tuesday', sleepHours: 6, screenTime: 9, mood: 'stressed', caffoeineIntake: 3, focusLevel: 5 },
    { day: 'Wednesday', sleepHours: 7, screenTime: 6, mood: 'happy', caffoeineIntake: 2, focusLevel: 7 },
    { day: 'Thursday', sleepHours: 5, screenTime: 10, mood: 'anxious', caffoeineIntake: 4, focusLevel: 4 },
    { day: 'Friday', sleepHours: 8, screenTime: 5, mood: 'content', caffoeineIntake: 1, focusLevel: 9 },
    { day: 'Saturday', sleepHours: 9, screenTime: 4, mood: 'joyful', caffoeineIntake: 0, focusLevel: 10 },
    { day: 'Sunday', sleepHours: 7, screenTime: 6, mood: 'calm', caffoeineIntake: 2, focusLevel: 8 },
];
// According to the data, higher sleeptime paired with lower caffine intake reseulrs in beyyer focus levels, along with
// increased mood positivity. Also, higher caffine intake seems to result in less sleephours along with lower focus levels. 
// All in all, caffine intake is not helping with performace, caffine seems to effect sleepHours, which in turn effects focusLevel 
// and mood.It might be beneficial to reduce caffine intake all togther. 

//Purpose: Analyze the data to find the day with the higest screenTime.
    function findHighestScreenTime() {
        let highestScreenTime = weekData[0];
        for (let i = 1; i < weekData.length; i++) {
            if (weekData[i].screenTime > highestScreenTime.screenTime) {
                highestScreenTime = weekData[i];
            }
        }
        return highestScreenTime;
    }
//Purpose: Calculates the data to find the average sleephours for the week.
    function averageSleepHours() {
        let totalSleep = 0;
        for (let i = 0; i < weekData.length; i++) {
            totalSleep += weekData[i].sleepHours;
        }
        return totalSleep / weekData.length;
    }
//Purpose: Determines the most frequent mood recorded during the week.
    function mostFrequentMood() {
        const moodCount = {};

         for (let i = 0; i < weekData.length; i++) {
          const mood = weekData[i].mood;
           moodCount[mood] = (moodCount[mood] || 0) + 1;
  }
         let mostFrequent = null;
         let maxCount = 0;

        for (const mood in moodCount) {
          if (moodCount[mood] > maxCount) {
            mostFrequent = mood;
              maxCount = moodCount[mood];
    }
  }
        return mostFrequent;
}
//Purpose: Correlates caffeine intake with focus levels throughout the week.
    function correlateCaffeineToFocus() {
         for (let i = 0; i < weekData.length; i++) {
         console.log(
         weekData[i].day + ': Caffeine Intake = ' +
         weekData[i].caffeineIntake +
         ', Focus Level = ' + weekData[i].focusLevel
    );
  }
}
