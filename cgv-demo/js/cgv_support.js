/**
 * DOM 객체 생성후 객체 호출
 */
window.addEventListener('DOMContentLoaded', () => {
    // 검색하기 버튼 이벤트
    let search_content = document.querySelector('#search_content');
    let btnSearch = document.querySelector('#btnSearch');

    btnSearch.addEventListener('click', () => {
        if(search_content.value.trim() === '') {
            alert('검색할 내용을 입력해 주세요');
            search_content.focus();
        } else {
            // 검색 진행

        }
    })
    
    // 테이블 생성 함수
    creatTable();

}) // window event

async function getJson() {
    let response = await fetch("../data/support.json");
    return response.json();
}

async function creatTable() {
    let list = await getJson();
    let output = `
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>구분</th>
                    <th>제목</th>
                    <th>등록일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5">1 2 3 4 5  >></td>
                </tr>
            </tfoot>
    `;
}