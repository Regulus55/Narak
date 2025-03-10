# Narak

---

<img src="https://github.com/user-attachments/assets/97164746-8320-438c-821f-f98f56b10330" alt="Image" />

모의 주식 투자 사이트

<br/>

---

## Overview

1. 프로젝트 기획 이유 :
    
    주식투자를 좋아하는 친구들과 함께 모의 주식 투자를 하기 위한 목적으로, 가상의 돈으로 주식을 원하는 만큼 매수하고, 주식투자에 자부심이 있는 친구들과 함께 자웅을 겨루기 위함.
   
    
3. 프로젝트 기간 :
    
    2024.11.30 ~ 현재 진행중 (첫 init 후 진행하지 못하다가 2025.02 부터 다시 진행중)
   
    
5. 개발스택 :
    - 프론트엔드: TypeScript, Tailwind CSS, React (React Query, Context API, React Hook Form 등)
    - 백엔드(현재 인증기능만): Firebase
    - 주식 데이터 API: Finhub, Twelve Data
      
6. 특징 :
    - 주로 스마트폰으로 접속할 상황이 많을것으로 예상하여 모바일화면을 기준으로 제작중.
    - 주식의 현재 가격과 수량을 단순히 곱해 구매하여, 모의계좌에서 해당 금액만큼 빼는 단순한 방식으로 기획.
    - Firebase 로 백엔드 구성 (추후 모의계좌, 채팅 기능 등 데이터베이스도 Firebase로 구성예정)
    - 토스 증권, Stock’er (모의 주식 투자 어플) 등의 어플을 참고하여 제작중.
      
7. 아쉬운 점
    - 데이터 호출의 지연과 정확도의 문제, API 호출 한도 존재, 주봉 이상의 데이터 불러오기 불가 등 Finhub, Twelve Data 의 무료 API 사용 제한
    - 실제 주식 시장에서 발생하는 수수료, 빠른 가격 변동, 매도/매수의 양에 따른 가격 차이 등을 반영하지 못한 점
      
8. 추후 추가할 내용
    - 주식의 현재가를 기준으로 모의계좌의 잔액 내에서 주식을 구입하는 기능
    - 나의 총 자산, 잔고, 주식 등을 볼 수 있는 기능과 페이지
    - 총 자산을 기준으로 한 랭킹, 유저 간 채팅 기능, 커뮤니티 등
    - 세부적인 UI 개선
    - 다크모드
      
9. 추후 개선할 내용
    - 현재 영어로 된 주식 심볼로만 검색이 가능하나, 추후 한글로 검색해도 자동으로 맞는 주식 심볼을 검색해주는 기능을 추가할 예정
    - 실제 주식 거래의 복잡한 요소들을 반영하여 더 현실감 있는 투자 환경이 되도록 개선할 예정

<br/>

---

## Preview

<img src="https://github.com/user-attachments/assets/26a8507d-63ae-44c9-9502-eee1ea89ef56" alt="Image" />

데스크톱 메인페이지
- Narak 은 방패에 나락 글자를 넣은것으로 나락을 방지한다는 뜻입니다. 
- 여러분들은 바로 실제 돈으로 주식투자 해서 잃지 마시고 Narak 을 사용하여 안전하게 주식투자 연습하시길 바랍니다.

<br/>
<br/>

<img src="https://github.com/user-attachments/assets/e5e0220c-b8f0-44d2-b24a-2e4d511f6173" alt="Image" />
<br/>
모바일 메인페이지와 프로필 드롭다운

<br/>
<br/>

<img src="https://github.com/user-attachments/assets/d18c3c98-7a88-464d-92d2-65731648a6db" alt="Image" />
<img src="https://github.com/user-attachments/assets/a490879e-3929-47fa-8d36-19591fa31c15" alt="Image" />

<br/>
<br/>

주식 상세 페이지

타 주식 사이트에서는 해외 주식 거래 시 현재 환율을 빠르게 확인할 수 있는 방법이 없어 불편함을 느끼고, 이를 개선하기 위해 주식 상세 페이지에서 바로 환율을 확인할 수 있도록 했습니다. (현재 환율은 목데이터입니다)

<br/>
<br/>

<img src="https://github.com/user-attachments/assets/fa601692-5172-466b-8416-4961ab5d838a" alt="Image" />
<img src="https://github.com/user-attachments/assets/69dc39fb-7658-4dfd-ac74-1d9b0427a3cc" alt="Image" />

메인페이지에서 주식 검색 시 검색 기록란에 주식심볼이 남고, localStorage(visitedPages)와 연동되어 추후 사이트 방문 시에도 유지됩니다.
