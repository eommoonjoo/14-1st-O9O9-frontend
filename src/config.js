// export const CATEGORY_MOCK_DATA_API = 'http://data/categorydata.json';
// export const QNA_MOCK_DATA_API = 'http://data/qnadata.json';

const IP_ADDRESS = '10.58.0.219';

export const REAVIEW_MOCK_DATA_API = 'http://data/reviewdata.json';
// export const PRODUCTVIEW_MOCK_DATA_API = 'http://data/productviewdata.json';
// export const USER_MOCK_DATA_API = 'http://data/userdata.json';

//메인 카테고리 목록 목데이터
export const CATEGORY_MOCK_DATA_API =
  'http://localhost:3000/data/categorydata.json';

//메인 카테고리 목록 api 주소
export const MAINCATEGORY_PRODUCTS_DATA_API = `http://${IP_ADDRESS}:8000/products/categories`;

export const PRODUCTS_LIST_API = `http://${IP_ADDRESS}:8000/products`;

//서브카테고리 목록 목데이터
export const SUBCATEGORY_MOCK_DATA =
  'http://localhost:3000/data/subcategoryData.json';

//현재 로그인한 유저 이름 받아오는 api
export const USERINFO_API = `http://${IP_ADDRESS}:8000/user/name`;

//로그인 api 주소
export const LOGIN_API = `http://${IP_ADDRESS}:8000/user/signin`;

//장바구니 목록 받아오는 api 주소
export const CARTLIST_API = `http://${IP_ADDRESS}:8000/order/`;

//상품 목록 목데이터
export const PRODUCTS_MOCK_DATA =
  'http://localhost:3000/data/productsdata.json';

//상품 목록 받아오는 api 주소
// export const CATEGORIES_API = `http://${IP_ADDRESS}:8000/products`;

export const CATEGORIES_API = `http://${IP_ADDRESS}:8000/products`;

export const SUBCATEGORY_PRODUCTS_DATA_API = '';

// SignUp Page //
// 회원가입 유효성 검사 API
export const CHECK_VALIDATION_API = `http://${IP_ADDRESS}:8000/user/signup`;

// 아이디 중복확인 체크 API
export const DUPLICATION_CHECK_API = `http://${IP_ADDRESS}:8000/user/doublecheck`;

// 인증메일 발송 API
export const POST_EMAIL_API = `http://${IP_ADDRESS}:8000/user/signupcode`;

// 인증 코드 유효성 검사 API
export const CODE_CHECK_API = `http://${IP_ADDRESS}:8000/user/signupallow`;

// product detail page //

// 성보님 productdetail api
export const PRODUCT_DETAIL_API = `http://${IP_ADDRESS}:8000/products`;
// 성보님 review api
export const PRODUCT_REVIEW_API = `http://${IP_ADDRESS}:8000/products/reviews/8`;
// 승제님 qna list api
export const PRODUCT_QNALIST_API = `http://${IP_ADDRESS}:8000/review/question`;
// 승제님 qna modal api
export const QUESTIONINFO_API = `http://${IP_ADDRESS}:8000/review/questioninfo`;

// Login Page

// 로그인 유효성검사 API
export const LOGIN_CHECK_VALIDATION_API = `http://${IP_ADDRESS}:8000/user/signin`;
// 승제님 qna enroll api
export const QUESTION_ENROLL_API = `http://${IP_ADDRESS}:8000/review/questionenroll`;

// 카트 목록 불러오는 api
export const CART_API = `http://${IP_ADDRESS}:8000/order/`;
