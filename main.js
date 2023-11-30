document.addEventListener('DOMContentLoaded',pageLoad)

/* ページをロードした時にテキストボックスにリスナを登録 */
function pageLoad(){
	var inputTextbox = document.getElementById('inputArea');
	inputTextbox.addEventListener('keydown', enterKeyPress);
    inputTextbox.focus();
    document.getElementById('logArea').value = "----------";
}

/* テキストボックスでEnterキーが押されたらコンソールに文字を表示 */
function enterKeyPress(event){
    if (event.key !== "Enter" || event.isComposing) {
        return;
    }
    console.log('Press your Enter key.')
    inputTextbox = document.getElementById('inputArea');
    inputText = inputTextbox.value;
    if(event.preventDefault) event.preventDefault();
    inputTextbox.value = "";

    existLogArea = document.getElementById('logArea');
    existLog = existLogArea.value;

    dateText = toISOStringWithTimezone()

    existLogArea.value = existLog + "\n" + dateText + " " + inputText;

    existLogArea.scrollTop = existLogArea.scrollHeight;

    return false

}

function toISOStringWithTimezone() {
    date = new Date()
    const pad = function (str) {
        return ('0' + str).slice(-2);
    };
    const year = (date.getFullYear()).toString();
    const month = pad((date.getMonth() + 1).toString());
    const day = pad(date.getDate().toString());
    const hour = pad(date.getHours().toString());
    const min = pad(date.getMinutes().toString());
    const sec = pad(date.getSeconds().toString());
    const tz = -date.getTimezoneOffset();
    const sign = tz >= 0 ? '+' : '-';
    const tzHour = pad((tz / 60).toString());
    const tzMin = pad((tz % 60).toString());

    return `${year}-${month}-${day} ${hour}:${min}:${sec}: `;
}