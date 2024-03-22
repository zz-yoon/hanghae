export function jsx(type, props, ...children) {
  /*
    type : DOM 요소의 타입
    props : DOM요소의 속성을 나타내는 객체 ex>id, class
    children : DOM요소의 자식 노드를 나타내는 배열, 하나의 문자열을 포함하는 배열
      {
        type: 'div',
        props: null,
        children: ['div의 children 입니다.']
      }
    */
  return {type, props, children};
}

export function createElement(node) {
  // jsx를 dom으로 변환
  const element = document.createElement(node.type);
  return element;
}


export function render(parent, newNode, oldNode, index = 0) {
  // 1. 만약 newNode가 없고 oldNode만 있다면
  //   parent에서 oldNode를 제거
  //   종료
  if (!newNode && oldNode) { 
    parent.removeChild(parent.childNodes[index]);
    return;
  }

  // 2. 만약 newNode가 있고 oldNode가 없다면
  //   newNode를 생성하여 parent에 추가
  //   종료
  if (newNode && !oldNode) { 
    console.log(newNode);
    /*
      const newElement = document.createElement("div");
      newElement.innerHTML = ??; //const app = jsx
      -> newElement.innerHTML = newNode.children[0];
      parent.appendChild(newElement);
    */
    parent.innerHTML = newNode.children[0];
    parent.appendChild(createElement(newNode));
    return;
  }

  // 3. 만약 newNode와 oldNode 둘 다 문자열이고 서로 다르다면
  //   oldNode를 newNode로 교체
  //   종료

  // 4. 만약 newNode와 oldNode의 타입이 다르다면
  //   oldNode를 newNode로 교체
  //   종료

  // 5. newNode와 oldNode에 대해 updateAttributes 실행

  // 6. newNode와 oldNode 자식노드들 중 더 긴 길이를 가진 것을 기준으로 반복
  //   각 자식노드에 대해 재귀적으로 render 함수 호출
}
