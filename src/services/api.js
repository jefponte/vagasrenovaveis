import axios from "axios";

export const apiPositions = axios.create({
    baseURL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQmWGxC_IMwU-R7RuuiIFVy0sj6uIvsauF-OSI2WX3qXKi7_e6aR-dIADwEzBA21j5n8BY_CnMKZPaw/pub?gid=0&single=true&output=tsv'
});



export const fetchData = async (setData) => {
    const response = await apiPositions.get();
    const data = tsvToJSON(response.data);
    setData(data);
};

export const fetchSelected = async (setSelected, id) => {
    const response = await apiPositions.get();
    const data = tsvToJSON(response.data);
    var selected = null;
    data.map((element) => {
        if (id === element.id) {
            selected = element;
        }
        return element;
    });
    setSelected(selected);
};

function tsvToJSON(csv) {
    const lines = csv.split('\r\n');
    const result = [];
    const headers = lines[0].split('\t');
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i]) {
            continue;
        }
        const obj = {};
        const currentline = lines[i].split('\t');
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return result;
}