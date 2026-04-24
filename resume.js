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

    const previewPane = document.getElementById('resume-preview-pane');
    const buildBtn = document.getElementById('build-resume-btn');

    // Handle Build Button
    buildBtn.onclick = () => {
        // Update basic info
        Object.keys(inputs).forEach(key => {
            let val = inputs[key].value;
            if (key === 'name') val = val.toUpperCase() || 'YOUR NAME';
            previews[key].textContent = val || '-';
        });

        renderEducation();
        renderExperience();

        // Show preview
        previewPane.style.display = 'flex';
        previewPane.scrollIntoView({ behavior: 'smooth' });
        showToast('Resume generated successfully!', 'success');
    };

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
        };
    });

    function renderEducation() {
        const eduEntries = document.querySelectorAll('#education-fields .entry-group');
        previews.education.innerHTML = '';
        eduEntries.forEach(entry => {
            const school = entry.querySelector('.res-edu-school').value;
            const degree = entry.querySelector('.res-edu-degree').value;
            const year = entry.querySelector('.res-edu-year').value;
            const grade = entry.querySelector('.res-edu-grade').value;

            if (!school && !degree) return;

            const div = document.createElement('div');
            div.className = 'pre-entry';
            div.innerHTML = `<strong>${school || 'University Name'}</strong><p>${degree || 'Degree'} | ${year || 'Year'} ${grade ? '| ' + grade : ''}</p>`;
            previews.education.appendChild(div);
        });
    }

    function renderExperience() {
        const expEntries = document.querySelectorAll('#experience-fields .entry-group');
        previews.experience.innerHTML = '';
        expEntries.forEach(entry => {
            const title = entry.querySelector('.res-exp-title').value;
            const company = entry.querySelector('.res-exp-company').value;
            const desc = entry.querySelector('.res-exp-desc').value;

            if (!title && !company) return;

            const div = document.createElement('div');
            div.className = 'pre-entry';
            div.innerHTML = `<strong>${title || 'Job Title'}</strong><span>${company || 'Company'}</span><p>${desc || ''}</p>`;
            previews.experience.appendChild(div);
        });
    }

    // Download Logic
    document.getElementById('download-resume-btn').onclick = () => {
        // Trigger print
        window.print();
        
        // Show download pop-out (toast)
        setTimeout(() => {
            showToast('Resume file downloaded successfully!', 'success');
        }, 1000);
    };
}
