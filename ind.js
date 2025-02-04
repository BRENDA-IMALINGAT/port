// script.js

const skillBars = document.querySelectorAll('skill-level');
const updateSkillLevelsButton = document.querySelector('button');

updateSkillLevelsButton.addEventListener('click', function() {
    skillBars.forEach(skillBar => {
        const randomLevel = Math.random() * 100;
        skillBar.style.width = `${randomLevel}%`; // Fixed the mismatched quote
    });
});

