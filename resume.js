// Resume Builder Logic for TALEX

function initResumeBuilder() {
    const inputs = {
        name: document.getElementById('res-name'),
        email: document.getElementById('res-email'),
        phone: document.getElementById('res-phone'),
        location: document.getElementById('res-location'),
        link: document.getElementById('res-link'),
        skills: document.getElementById('res-skills')
    };

    const previews = {
        name: document.getElementById('pre-name'),
        email: document.getElementById('pre-email'),
        phone: document.getElementById('pre-phone'),
        location: document.getElementById('pre-location'),
        link: document.getElementById('pre-link'),
        skills: document.getElementById('pre-skills'),
        education: document.getElementById('pre-education'),
        experience: document.getElementById('pre-experience')
    };

    // Update basic info
    Object.keys(inputs).forEach(key => {
        if (!inputs[key]) return;
        inputs[key].addEventListener('input', () => {
            let val = inputs[key].value;
            if (key === 'name') val = val.toUpperCase() || 'YOUR NAME';
            previews[key].textContent = val;
        });
    });

    // Handle Dynamic Fields (Education/Experience)
    document.querySelectorAll('.add-field').forEach(btn => {
        btn.onclick = () => {
            const type = btn.dataset.type;
            const container = document.getElementById(`${type}-fields`);
            const entry = document.createElement('div');
            entry.className = 'entry-group';
            
            if (type === 'education') {
                entry.innerHTML = `
                    <input type="text" class="res-edu-school" placeholder="University/College Name">
                    <input type="text" class="res-edu-degree" placeholder="Degree">
                    <div class="flex-row">
                        <input type="text" class="res-edu-year" placeholder="Year">
                        <input type="text" class="res-edu-grade" placeholder="Grade">
                    </div>
                `;
            } else {
                entry.innerHTML = `
                    <input type="text" class="res-exp-title" placeholder="Job Title / Project Name">
                    <input type="text" class="res-exp-company" placeholder="Company / Organization">
                    <textarea class="res-exp-desc" rows="3" placeholder="Describe your responsibilities..."></textarea>
                `;
            }
            container.appendChild(entry);
            setupDynamicListeners();
        };
    });

    function setupDynamicListeners() {
        // Education
        const eduEntries = document.querySelectorAll('#education-fields .entry-group');
        previews.education.innerHTML = '';
        eduEntries.forEach(entry => {
            const school = entry.querySelector('.res-edu-school');
            const degree = entry.querySelector('.res-edu-degree');
            const year = entry.querySelector('.res-edu-year');
            const grade = entry.querySelector('.res-edu-grade');

            const update = () => {
                renderEducation();
            };

            [school, degree, year, grade].forEach(el => {
                el.removeEventListener('input', update);
                el.addEventListener('input', update);
            });
        });

        // Experience
        const expEntries = document.querySelectorAll('#experience-fields .entry-group');
        previews.experience.innerHTML = '';
        expEntries.forEach(entry => {
            const title = entry.querySelector('.res-exp-title');
            const company = entry.querySelector('.res-exp-company');
            const desc = entry.querySelector('.res-exp-desc');

            const update = () => {
                renderExperience();
            };

            [title, company, desc].forEach(el => {
                el.removeEventListener('input', update);
                el.addEventListener('input', update);
            });
        });
        
        renderEducation();
        renderExperience();
    }

    function renderEducation() {
        const eduEntries = document.querySelectorAll('#education-fields .entry-group');
        previews.education.innerHTML = '';
        eduEntries.forEach(entry => {
            const school = entry.querySelector('.res-edu-school').value || 'University Name';
            const degree = entry.querySelector('.res-edu-degree').value || 'Degree';
            const year = entry.querySelector('.res-edu-year').value || 'Year';
            const grade = entry.querySelector('.res-edu-grade').value || '';

            const div = document.createElement('div');
            div.className = 'pre-entry';
            div.innerHTML = `<strong>${school}</strong><p>${degree} | ${year} ${grade ? '| ' + grade : ''}</p>`;
            previews.education.appendChild(div);
        });
    }

    function renderExperience() {
        const expEntries = document.querySelectorAll('#experience-fields .entry-group');
        previews.experience.innerHTML = '';
        expEntries.forEach(entry => {
            const title = entry.querySelector('.res-exp-title').value || 'Job Title';
            const company = entry.querySelector('.res-exp-company').value || 'Company';
            const desc = entry.querySelector('.res-exp-desc').value || 'Description...';

            const div = document.createElement('div');
            div.className = 'pre-entry';
            div.innerHTML = `<strong>${title}</strong><span>${company}</span><p>${desc}</p>`;
            previews.experience.appendChild(div);
        });
    }

    setupDynamicListeners();

    // Download Logic
    document.getElementById('download-resume-btn').onclick = () => {
        window.print(); // Simple way for resume as print styles will handle it
    };
}
