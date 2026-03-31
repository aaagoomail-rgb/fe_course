// 최초 호출되는 이벤트 함수 : window.addEventListener()
window.addEventListener('DOMContentLoaded', () => {
    show();
});

// getJson 함수 생성
const data_url = 'http://127.0.0.1:5501/javascript/13.asynchronous/fruits.json'

const getJson = async () => {
    let response = await fetch(data_url);
    return response.json();
}

// show 함수 생성
const show = async() => {
    let jsonData = await getJson();
    console.log('jsonData =>', jsonData, typeof jsonData);

    let output = `
        <h1>${jsonData.title}</h1>
        <table border=1>
            <tr>
                <th>NO</th>
                <th>NAME</th>
                <th>COLOR</th>
                <th>EMOJI</th>
            </tr>
            ${  // JS 코드
                jsonData.list.map((fruit, idex) =>
                    `<tr>
                        <td>${idex + 1}</td>
                        <td>${fruit.name}</td>
                        <td>${fruit.color}</td>
                        <td>${fruit.emoji}</td>
                    </tr>`
                ).join("")
            }
        </table>
    `;

    // console.log(output);
    document.querySelector('#content').innerHTML = output;
}

// show();