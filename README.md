# dogactivity
This project revolves around creating a virtual representation of Perec, my dog. The project utilizes a JavaScript class named Dog to model Perec's behavior and well-being. Perec starts with full energy and happiness levels and can engage in two activities: barking and fetching.

## Features
**Barking:**

Perec expresses his enthusiasm with a spirited "Woof! Woof!"
Energy decreases by 10, and happiness increases by 5 with each bark.

**Fetching:**

Perec showcases his playful nature by fetching a ball.
Fetching requires more energy, decreasing it by 15, while happiness increases by 10.

**Status Monitoring:**

Perec's energy and happiness levels are constantly monitored through the checkStatus method.
If Perec becomes tired (energy reaches 0), he automatically takes a nap, restoring his energy to 100.

## Usage

```
const perec = new Dog("Perec");

perec.bark();
perec.fetch();
perec.bark();
// ... add more interactions with Perec
```
Simply create an instance of the Dog class named perec and start interacting with Perec by making him bark, fetch, or implement additional activities.

## Installation

**Clone the repository to your local machine:**
```
git clone https://github.com/krisztipely/dogactivity.git
```

**Navigate to the project directory:**
```
cd dogactivity
```
Open the perec.js file in your preferred JavaScript environment and run the script.

## Future Enhancements

**Additional Activities:**
Expand Perec's repertoire of activities for a more dynamic experience.

**Graphical Interface:**
Incorporate a graphical representation to enhance user interaction.

**User Interaction:**
Introduce user input to allow external interactions with Perec.

**Activity Tracking:**
Implement features for tracking and visualizing Perec's activities over time.

Feel free to contribute and make Perec's virtual life even more vibrant!

## License
[MIT](https://github.com/krisztipely/dogactivity/blob/master/LICENSE) 2023, Krisztina-Ronkainen Lakner
