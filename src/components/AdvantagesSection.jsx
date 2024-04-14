import MyButton from "./MyButton";
export default function AdvantagesSection() {
  return (
    <>
              <h1 className="visually-hidden">About our gym opportunities</h1>
      <section className="advantages-section">
        <div className="advantages-section__container-1">
          <div className="advantages-section__container">
            <h2 className="visually-hidden">Advantages our company</h2>
            <p className="advantages-section__name">
              come &amp; create your own
              <span className="advantages-section__span"> new </span>
              body
            </p>
            <p className="advantages-section__description">
              faster,stronger fight to the end
            </p>
            <MyButton>More Details</MyButton>
          </div>
          <div className="advantages-section__condition-container">
          <ul className="advantages-section__condition-list">
            <li className="advantages-section__item">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="#ea377b"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58.5 39H57V28.8656C57 27.675 56.5219 26.5312 55.6781 25.6875L46.3125 16.3219C45.4688 15.4781 44.325 15 43.1344 15H39V10.5C39 8.01562 36.9844 6 34.5 6H10.5C8.01562 6 6 8.01562 6 10.5V15H0.75C0.3375 15 0 15.3375 0 15.75V17.25C0 17.6625 0.3375 18 0.75 18H26.25C26.6625 18 27 18.3375 27 18.75V20.25C27 20.6625 26.6625 21 26.25 21H3.75C3.3375 21 3 21.3375 3 21.75V23.25C3 23.6625 3.3375 24 3.75 24H23.25C23.6625 24 24 24.3375 24 24.75V26.25C24 26.6625 23.6625 27 23.25 27H0.75C0.3375 27 0 27.3375 0 27.75V29.25C0 29.6625 0.3375 30 0.75 30H20.25C20.6625 30 21 30.3375 21 30.75V32.25C21 32.6625 20.6625 33 20.25 33H6V45C6 49.9687 10.0312 54 15 54C19.9688 54 24 49.9687 24 45H36C36 49.9687 40.0312 54 45 54C49.9688 54 54 49.9687 54 45H58.5C59.325 45 60 44.325 60 43.5V40.5C60 39.675 59.325 39 58.5 39ZM15 49.5C12.5156 49.5 10.5 47.4843 10.5 45C10.5 42.5156 12.5156 40.5 15 40.5C17.4844 40.5 19.5 42.5156 19.5 45C19.5 47.4843 17.4844 49.5 15 49.5ZM45 49.5C42.5156 49.5 40.5 47.4843 40.5 45C40.5 42.5156 42.5156 40.5 45 40.5C47.4844 40.5 49.5 42.5156 49.5 45C49.5 47.4843 47.4844 49.5 45 49.5ZM52.5 30H39V19.5H43.1344L52.5 28.8656V30Z"
                  fill="#EA377B"
                />
              </svg>
              <h3 className="advantages-section__h3">free shipping</h3>
              <p className="advantages-section__info">
                Contrary to popular belief ipsum is simply random.
              </p>
            </li>
            <li className="advantages-section__item">
              <svg
                width="50"
                height="40"
                viewBox="0 0 50 40"
                fill="#ea377b"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45 10H5V5H45M45 35H5V20H45M45 0H5C2.225 0 0 2.225 0 5V35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H45C46.3261 40 47.5979 39.4732 48.5355 38.5355C49.4732 37.5979 50 36.3261 50 35V5C50 3.67392 49.4732 2.40215 48.5355 1.46447C47.5979 0.526784 46.3261 0 45 0Z"
                  fill="#EA377B"
                />
              </svg>
              <h3 className="advantages-section__h3">instant payments</h3>
              <p className="advantages-section__info">
                Contrary to popular belief ipsum is simply random.
              </p>
            </li>
            <li className="advantages-section__item">
              <svg
                width="46"
                height="42"
                viewBox="0 0 46 42"
                fill="#ea377b"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43 13.5C43.6123 13.5001 44.2033 13.7249 44.6609 14.1318C45.1185 14.5387 45.4109 15.0994 45.4825 15.7075L45.5 16V28.5C45.5 31.0656 44.5139 33.5331 42.7457 35.392C40.9775 37.251 38.5624 38.3592 36 38.4875L35.5 38.5H13.2675L13.2175 39.5375L13.1325 40.835C13.065 41.7 12.2525 42.2275 11.555 41.86L10.79 41.45L9.89 40.9425L9.395 40.65L8.32 39.9925C8.12836 39.8713 7.93752 39.7488 7.7475 39.625L6.59 38.85L6.065 38.4825L5.1225 37.8L4.335 37.2C4.22372 37.1139 4.11288 37.0272 4.0025 36.94C3.4125 36.47 3.44 35.525 4.06 35.035L4.76 34.4925L5.61 33.8625L6.61 33.1575L7.75 32.395L8.905 31.6675L9.945 31.045L10.8575 30.5325L11.625 30.12C12.3125 29.7625 13.0525 30.21 13.12 31.02L13.1825 31.8875L13.2425 32.925L13.2675 33.5H35.5C36.7614 33.5004 37.9764 33.024 38.9014 32.1663C39.8263 31.3085 40.3929 30.1329 40.4875 28.875L40.5 28.5V16C40.5 15.337 40.7634 14.7011 41.2322 14.2322C41.7011 13.7634 42.337 13.5 43 13.5ZM34.445 0.1375L35.21 0.55L36.11 1.0575L36.605 1.35L37.68 2.0075L38.2525 2.375L39.41 3.15L39.935 3.5175L40.8775 4.2L41.665 4.8L41.9975 5.06C42.5875 5.53 42.56 6.475 41.94 6.965L41.24 7.5075L40.39 8.1375L39.39 8.8425L38.25 9.605L37.095 10.3325L36.055 10.955L35.1425 11.4675L34.375 11.88C33.6875 12.2375 32.945 11.79 32.88 10.98L32.8175 10.1125L32.7575 9.075C32.7483 8.88337 32.7399 8.6917 32.7325 8.5H10.5C9.17392 8.5 7.90215 9.02678 6.96447 9.96447C6.02678 10.9021 5.5 12.1739 5.5 13.5V26C5.5 26.663 5.23661 27.2989 4.76777 27.7678C4.29893 28.2366 3.66304 28.5 3 28.5C2.33696 28.5 1.70107 28.2366 1.23223 27.7678C0.763392 27.2989 0.5 26.663 0.5 26V13.5C0.5 10.8478 1.55357 8.3043 3.42893 6.42893C5.3043 4.55357 7.84784 3.5 10.5 3.5H32.7325L32.7825 2.4625L32.8375 1.5625L32.8675 1.165C32.935 0.3 33.7475 -0.23 34.445 0.1375Z"
                  fill="#EA377B"
                />
              </svg>
              <h3 className="advantages-section__h3">exhange &amp; return</h3>
              <p className="advantages-section__info">
                Contrary to popular belief ipsum is simply random.
              </p>
            </li>
            <li className="advantages-section__item">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="#ea377b"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5 0.125V5.175C37.375 6.4 45 14.8 45 25C45 33.025 40.2 40 33.2 43.2L27.5 37.5V50H40L36.95 46.95C44.775 42.675 50 34.4 50 25C50 12.05 40.125 1.375 27.5 0.125ZM22.5 0C17.625 0.5 13 2.4 9.2 5.525L12.75 9.075C15.5877 6.88745 18.9496 5.48238 22.5 5V0ZM5.5 9.2C2.4 13 0.5 17.625 0 22.5H5C5.475 18.95 6.875 15.575 9.075 12.75L5.5 9.2ZM10 15V20H17.5V22.5H15C12.25 22.5 10 24.75 10 27.5V35H22.5V30H15V27.5H17.5C20.275 27.5 22.5 25.275 22.5 22.5V20C22.5 18.6739 21.9732 17.4021 21.0355 16.4645C20.0979 15.5268 18.8261 15 17.5 15H10ZM25 15V27.5H32.5V35H37.5V27.5H40V22.5H37.5V15H32.5V22.5H30V15H25ZM0 27.5C0.5 32.375 2.425 37 5.55 40.8L9.1 37.25C6.90502 34.414 5.49142 31.0524 5 27.5H0ZM12.775 40.925L9.2 44.475C12.9984 47.5763 17.6221 49.4971 22.5 50V45C18.9542 44.5286 15.5977 43.1221 12.775 40.925Z"
                  fill="#EA377B"
                />
              </svg>
              <h3 className="advantages-section__h3">customer service</h3>
              <p className="advantages-section__info">
                Contrary to popular belief ipsum is simply random.
              </p>
            </li>
          </ul>
        </div>
        </div>
        
      </section>
    </>
  );
}
