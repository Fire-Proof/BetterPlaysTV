import store from './store';

function generateToggle(name, functionName) {
    const li = document.createElement('li');

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = store.getValue(functionName);
    input.id = functionName;

    const label = document.createElement('label');
    label.htmlFor = functionName;
    label.appendChild(document.createTextNode(name));

    li.appendChild(input);
    li.appendChild(label);

    input.onclick = () => {
        console.log(input.checked);
        console.log(typeof store.getValue(functionName));
        store.setValue(functionName, input.checked);
        console.log(typeof store.getValue(functionName));
    };

    return li;
}

function initSettingsMenu() {
    const dropdownList = document.querySelector('.profile-dropdown.dropdown-menu > ul');
    console.log(dropdownList);
    dropdownList.appendChild(generateToggle('Disable intros', 'setting-DisableIntro-enable'));
    dropdownList.appendChild(generateToggle('Disable autoreplay', 'setting-DisableAutoReplay-enable'));
    dropdownList.appendChild(generateToggle('Hide social links', 'setting-disableSocialHovers-enable'));
    dropdownList.appendChild(generateToggle('Enable expanded view', 'setting-expandedView-enable'));
    dropdownList.appendChild(generateToggle('Enable filter', 'setting-filterFeed-enable'));
}

export default initSettingsMenu;
