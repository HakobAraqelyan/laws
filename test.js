
const root = document.querySelector("#root");

const allPageDiv = document.createElement('div');
const menuDiv = document.createElement('div');
const advertisementDivL = document.createElement('div');
const advertisementDivR = document.createElement('div');
const searchDiv1 = document.createElement('div');


allPageDiv.id = ('allPageDivId');
menuDiv.id = ('menuDiv');
advertisementDivL.id = ('advertisementDivL');
searchDiv1.id = ('searchDiv');
advertisementDivR.id = ('advertisementDivR');


allPageDiv.appendChild(menuDiv);
allPageDiv.appendChild(advertisementDivL);
allPageDiv.appendChild(advertisementDivR);
allPageDiv.appendChild(searchDiv1);

root.appendChild(allPageDiv);


// export default root;

// import arryLi from "./arryBase.js"

const searchDiv = document.querySelector("#searchDiv");


const searchTypes = document.createElement('div');
const searchTypeSimple = document.createElement('div');
const searchSimpleDiv = document.createElement('div');
const searchSimpleText = document.createTextNode('Պարզ Որոնում');
const searchComplicated = document.createElement('div');
const searchComplicatedText = document.createTextNode('Ընդլայնված Որոնում');
const searchByDiv = document.createElement('div');

searchTypes.id = ('searchTypesId');
searchTypeSimple.id = ('searchTypeSimpleId');
searchSimpleDiv.id = ('searchSimpleDiv');
searchSimpleDiv.classList = ('simple searchTypes type active');
searchSimpleDiv.dataset.show = (true);
searchComplicated.id = ('searchComplicated');
searchComplicated.classList = ('clmplicated offActive type');
searchComplicated.dataset.show = (false);
searchByDiv.id = ('searchByDiv');

searchSimpleDiv.appendChild(searchSimpleText);
searchComplicated.appendChild(searchComplicatedText);
searchTypes.appendChild(searchSimpleDiv);
searchTypes.appendChild(searchComplicated);


const inpCheckboxSimpleDiv = document.createElement('div');
const hrTypes = document.createElement('hr');
const inpCheckboxSimpl = document.createElement('input');
const labelCheckboxSimplText = document.createTextNode('Միայն Վերնագրում');
const labelCheckboxInpTextSimpl = document.createElement('label');
const inpTextSimple = document.createElement('input');

inpCheckboxSimpleDiv.id = ('inpCheckboxSimpleDivId');
inpCheckboxSimpl.id = ('checkboxInputSimplId');
inpCheckboxSimpl.type = ('checkbox');
labelCheckboxInpTextSimpl.htmlFor = ("checkboxInputSimplId");
inpTextSimple.id = ('inpTextsimpleId');
inpTextSimple.placeholder = ('Որոնվող տեքատ');

labelCheckboxInpTextSimpl.appendChild(labelCheckboxSimplText);
inpCheckboxSimpleDiv.appendChild(hrTypes);
inpCheckboxSimpleDiv.appendChild(inpCheckboxSimpl);
inpCheckboxSimpleDiv.appendChild(labelCheckboxInpTextSimpl);
inpCheckboxSimpleDiv.appendChild(inpTextSimple);


const NoDocDiv = document.createElement('div');
const inpNoDocDivSpan = document.createElement('span');
const inpNoDocDivText = document.createTextNode('Փաստաթխթի տիպը')
const inpNoDoc = document.createElement('input');
const inpDocType = document.createElement('input');
const brTypes = document.createElement('հr');

NoDocDiv.id = ('NoDocDivId');
inpNoDocDivSpan.id = ('inpNoDocTextSpanId');
inpNoDoc.id = ('inpNoDoc');
inpNoDoc.placeholder = ('Փաստաթղթի համարը');
inpDocType.id = ('inpDocTypeId');
inpDocType.placeholder = ('Փաստաթուղթ');
inpDocType.dataset.show = (false);

inpNoDocDivSpan.appendChild(inpNoDocDivText);
NoDocDiv.appendChild(inpNoDocDivSpan);
NoDocDiv.appendChild(inpNoDoc);
NoDocDiv.appendChild(inpDocType);
NoDocDiv.appendChild(brTypes);


const accseptDiv = document.createElement('div');
const inpReceivingBodySpan = document.createElement('span');
const inpReceivingBodyText = document.createTextNode('Ընդունող մարմին');
const inpReceivingBody = document.createElement('input');
const inpAcceptedYearSpan = document.createElement('span');
const inpAcceptedYearText = document.createTextNode('Ընդունման տարին');
const inpAcceptedYear = document.createElement('input');

accseptDiv.id = ('accseptDivId');
inpReceivingBodySpan.id = ('inpRecceivingBodySpanId')
inpReceivingBody.id = ('inpReceivingBodyId');
inpReceivingBody.placeholder = ('Ընդունող մարմին');
inpAcceptedYearSpan.id = ('inpAcceptedYearSpanId');
inpAcceptedYear.id = ('inpAcceptedYearId');
inpAcceptedYear.placeholder = ('Տարեթիվ')

inpReceivingBodySpan.appendChild(inpReceivingBodyText);
inpAcceptedYearSpan.appendChild(inpAcceptedYearText);
accseptDiv.appendChild(inpReceivingBodySpan);
accseptDiv.appendChild(inpReceivingBody);
accseptDiv.appendChild(inpAcceptedYearSpan);
accseptDiv.appendChild(inpAcceptedYear);


const checkboxOtherDiv = document.createElement('div');
const checkboxLastLook = document.createElement('input');
const labelCheckboxLastLook = document.createElement('label');
const labelcheckboxLastLookText = document.createTextNode('Գործող ակտերի վերջին տեսքը');
const brOther = document.createElement('br');
const checkboxOfficialIncActs = document.createElement('input');
const labelCheckboxOfficialIncActs = document.createElement('label');
const labelCheckboxOfficialIncActsText = document.createTextNode('Պաշտոնական ինկորպորացիայի ենթարկված ակտերը');

checkboxOtherDiv.id = ('checkboxOtherDivId');
checkboxLastLook.id = ('checkboxLastLookId');
checkboxLastLook.type = ('checkbox');
labelCheckboxLastLook.htmlFor = ("checkboxLastLookId");
checkboxOfficialIncActs.id = ('checkboxOfficialIncActsId');
checkboxOfficialIncActs.type = ('checkbox');
labelCheckboxOfficialIncActs.id = ('labelCheckboxOfficialIncActsId');
labelCheckboxOfficialIncActs.htmlFor = ("checkboxOfficialIncActsId");

labelCheckboxOfficialIncActs.appendChild(labelCheckboxOfficialIncActsText);
labelCheckboxLastLook.appendChild(labelcheckboxLastLookText);
labelCheckboxLastLook.appendChild(brOther);
checkboxOtherDiv.appendChild(checkboxLastLook);
checkboxOtherDiv.appendChild(labelCheckboxLastLook);
checkboxOtherDiv.appendChild(checkboxOfficialIncActs);
checkboxOtherDiv.appendChild(labelCheckboxOfficialIncActs);


const searchApply = document.createElement('div');
const buttApplySearch = document.createElement('button');
const labelButtApplySearchText = document.createTextNode('Որոնել');

searchApply.id = ('searchApplyId');
buttApplySearch.id = ('buttApplySearchId')
buttApplySearch.appendChild(labelButtApplySearchText);

searchApply.appendChild(buttApplySearch);


searchByDiv.appendChild(inpCheckboxSimpleDiv);
searchByDiv.appendChild(NoDocDiv);
searchByDiv.appendChild(accseptDiv);
searchByDiv.appendChild(checkboxOtherDiv);

searchTypeSimple.appendChild(searchByDiv);
searchTypeSimple.appendChild(searchApply);
searchDiv.appendChild(searchTypes);
searchDiv.appendChild(searchTypeSimple);


searchSimpleDiv.addEventListener('click', e => {
    console.log(e.target.dataset.show);

})

const searchDocTypesPageDiv = document.createElement('div');
const divDocProp = document.createElement('div');
const divDocType = document.createElement('div');

searchDocTypesPageDiv.addEventListener('click', (e) => {
    const clickEPageDiv = e.target.id;
    if (clickEPageDiv == "searchDocTypesPageDivId") {
        searchDocTypesPageDiv.classList = ('hiddenDiv none');
    };
});

inpDocType.addEventListener('click', (e, id = (`checkbox`)) => {
    searchDocTypesPageDiv.id = ('searchDocTypesPageDivId');
    searchDocTypesPageDiv.dataset.show = (false);

    if (inpDocType.dataset.show == 'true') {
        searchDocTypesPageDiv.classList = ('');
    }
    if (inpDocType.dataset.show == 'false' && e.target.id == "inpDocTypeId") {
        const clickEDocType = e.target;
        const searchDocTypesDiv = document.createElement('div');
        divDocProp.id = ('divDocPropId');
        divDocType.id = ('divDocTypeId');

        const inpSearchDocTypes = document.createElement('input');
        searchDocTypesDiv.id = ('searchDocTypesDivId');
        searchDocTypesDiv.appendChild(inpSearchDocTypes);

        arryLi.forEach(e => {
            func(e);
        });

        divDocProp.appendChild(divDocType);
        searchDocTypesPageDiv.appendChild(divDocProp);
        inpDocType.dataset.show = true;
        NoDocDiv.appendChild(searchDocTypesPageDiv);
        divDocType.append(searchDocTypesDiv);

    }
});

function func(e, text, li, checkbox, hr, label, id = (`checkbox`)) {
    text = document.createTextNode(e);
    checkbox = document.createElement('input');
    hr = document.createElement('hr');
    label = document.createElement('label');

    let i = Math.floor(1000 * Math.random());

    li = document.createElement('li');
    checkbox.type = ('checkbox');
    checkbox.id = (id + i);
    checkbox.checked = false;
    label.htmlFor = (id + i);
    li.appendChild(checkbox);
    li.appendChild(text);

    label.appendChild(li);
    label.appendChild(hr);

    divDocType.appendChild(label);
};

divDocType.addEventListener('click', e => {
    // console.log("​e", e)
    const clickE = e.target.checked;
    const arryObj = [];

    if (clickE === true) {
        const clickEtarget = e.target;

        if (clickEtarget.nodeName === 'INPUT') {
            arryObj.inpIsChecket = clickEtarget.checked;
            arryObj.tageName = clickEtarget.nodeName;
            arryObj.tagInp = clickEtarget.nodeName;
            arryObj.tageControl = clickEtarget.checked;
            arryObj.typeInp = clickEtarget.type;
            arryObj.tagLabel = clickEtarget.labels[0].nodeName;
            arryObj.tagLabelText = clickEtarget.labels[0].outerText;
            arryObj.inpId = clickEtarget.id;
            arryObj.tagInpCheckDiv = 'div';
        };
        console.log("​arryObj", arryObj);

        const inpCheckDiv = document.createElement(arryObj.tagInpCheckDiv);
        const divId = inpCheckDiv.id = (`div${arryObj.inpId}`);
        const inpCheck = document.createElement(arryObj.tagInp);
        inpCheck.type = (arryObj.typeInp);
        inpCheck.id = (arryObj.inpId);
        inpCheck.checked = (true);

        const labelcheck = document.createElement(arryObj.tagLabel);
        const labelText = document.createTextNode(arryObj.tagLabelText);
        labelcheck.htmlFor = (arryObj.inpId);
        labelcheck.appendChild(labelText);

        labelcheck.appendChild(inpCheck);
        inpCheckDiv.appendChild(labelcheck);
        searchTypeItemsDiv.appendChild(inpCheckDiv);
        NoDocDiv.appendChild(searchTypeItemsDiv);
    }
    // console.log("​clickE", clickE);
    if (clickE === false) {
        console.log("​filterDivRemoveF", filterDivRemoveF)
        filterDivRemoveF(searchTypeItemsDiv, e);
    }

});

const searchTypeItemsDiv = document.createElement('div');
searchTypeItemsDiv.id = ('searchTypeItemsDivId');

searchTypeItemsDiv.addEventListener('click', e => {
    console.log(e.target.checked);
    console.log("​e", e);
    inpForEach(divDocType);
    function inpForEach(docElement) {
        docElement.childNodes.forEach(inpElement => {
            if (inpElement.nodeName === "INPUT") {
                if (inpElement.id == e.target.id) {
                    inpElement.checked = false;
                }
            }
            else {
                inpForEach(inpElement)
            }

        })
    }



    if (e.target.nodeName === "INPUT") {
        const removeEtrgetId = `div${e.target.id}`;
        return funcRemovTage(removeEtrgetId);
    }
});


function filterDivRemoveF(elements, e) {
    console.log("​filterDivRemoveF -> elements, e", elements.nodeName);
    elements.childNodes.forEach(nodes => {
        if (nodes.nodeName == 'DIV' && nodes.id.match(/^divcheckbox\d/)) {
            const removeEtrgetId = `div${e.target.id}`;
            console.log("​filterDivRemoveF -> e.target.id", e.target.id)
            return funcRemovTage(removeEtrgetId);
        }
    })
}

function funcRemovTage(eelements) {
    const removTage = document.querySelector(`#${eelements}`);
    removTage.remove();
}

searchSimpleDiv.addEventListener('click', e => {
    searchComplicated.classList = ('clmplicated offActive type');
    searchSimpleDiv.classList = ('simple searchTypes type active');
    console.log(e);
})

searchComplicated.addEventListener('click', e => {
    searchComplicated.classList = ('simple searchTypes type active');
    searchSimpleDiv.classList = ('clmplicated offActive type');
    console.log(e);
})

const arryLi = [
    'Սահմանադրություն',
    'Սահմանադրական օրենք',
    'Օրենսգիրք',
    'Սահմանադրության փոփոխություններ',
    'Օրենք',
    'Հռչակագիր',
    'Դեկլարացիա',
    'Հրամանագիր',
    'Ուղերձ',
    'Որոշում',
    'Համատեղ որոշում',
    'Օրենքի ուժ ունեցող որոշում',
    'Կարգ',
    'Կարգադրություն',
    'Հայտարարություն',
    'Եզրակացություն',
    'Դիմում',
    'Հրահանգ',
    'Հրաման',
    'Համատեղ հրաման',
    'Կանոններ',
    'Կանոնադրություն',
    'Կանոնակարգ',
    'Պլենումի որոշում',
    'Պարզաբանում',
    'Իրազեկման թերթիկ',
    'Հրահանգչական նամակ',
    'Մեթոդական ցուցում',
    'Ցանկ',
    'Ցուցում',
    'Պաշտոնական պարզաբանում',
    'Պաշտոնական տեղեկատվություն',
    'Պաշտոնական հաղորդագրություն',
    'Տեղեկատվություն',
    'Արձանագրային որոշում',
    'Աշխատակարգային որոշում',
    'Սահմանադրության նախագիծ',
    'Վճիռ',
    'ՄԻՋԱԶԳԱՅԻՆ ՊԱՅՄԱՆԱԳՐԵՐ',
    'Միջազգային պայմանագիր',
    'Խարտիա',
    'Կոնվենցիա',
    'Համաձայնագիր',
    'Հյուպատոսական կոնվենցիա',
    'Արձանագրություն',
    'Եզրափակիչ ակտ',
    'Փոխըմբռնման հուշագիր',
    'Միջազգային դաշնագիր',
    'Ֆակուլտատիվ արձանագրություն',
];


// export default arryLi;
