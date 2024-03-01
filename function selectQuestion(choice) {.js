function selectQuestion(choice) {
    // 선택한 질문에 해당하는 답변 가져오기
    var answers = [
        "오늘은 맑은 날씨입니다.",
        "저는 코딩을 하는 것을 좋아합니다.",
        "저는 인공지능 관련 서적을 좋아합니다."
        // 질문과 같은 순서로 답변을 추가해야 합니다.
    ];
    var answer = answers[choice - 1];

    // 답변을 화면에 표시
    document.getElementById("answer").innerText = answer;
}
