const Gurleen = () => {
    const styles = {
        innerContainer: {
            backgroundColor: '#808080',
            borderRadius: '8px',
            padding: '10px'
        },
        inputStyle: {
            backgroundColor: '#fff',
            margin: '2px',
            width: '100%'
        },
        applyButton:{
            width:"50px",
            height:"20px",
            backgroundColor:'pink',
            color:"white"
        }
    }

    const list = [
        {
            id: 1,
            img: 'RectangleA.png',
            title: 'Business Developer',
            address: "Sector 17",
            jobType: "Remote",
            city: "Chandigarh",
            date: "12-23-2025"
        },
        {
            id: 2,
            img: 'RectangleB.png',
            title: 'Frontend Developer',
            address: "Sector 22",
            jobType: "Onsite",
            city: "Pune",
            date: "12-20-2025"
        },
        {
            id: 3,
            img: 'RectangleC.png',
            title: 'Backend Developer',
            address: "Sector 5",
            jobType: "Hybrid",
            city: "Bangalore",
            date: "12-18-2025"
        },
        {
            id: 4,
            img: 'RectangleD.png',
            title: 'UI/UX Designer',
            address: "Sector 12",
            jobType: "Remote",
            city: "Mumbai",
            date: "12-21-2025"
        },
        {
            id: 5,
            img: 'RectangleE.png',
            title: 'Data Scientist',
            address: "Sector 9",
            jobType: "Onsite",
            city: "Delhi",
            date: "12-19-2025"
        },
        {
            id: 6,
            img: 'RectangleF.png',
            title: 'Product Manager',
            address: "Sector 14",
            jobType: "Remote",
            city: "Hyderabad",
            date: "12-22-2025"
        },
        {
            id: 7,
            img: 'RectangleG.png',
            title: 'Quality Assurance Engineer',
            address: "Sector 21",
            jobType: "Onsite",
            city: "Chennai",
            date: "12-17-2025"
        },
        {
            id: 8,
            img: 'RectangleH.png',
            title: 'DevOps Engineer',
            address: "Sector 18",
            jobType: "Hybrid",
            city: "Kolkata",
            date: "12-20-2025"
        },
        {
            id: 9,
            img: 'RectangleI.png',
            title: 'Marketing Specialist',
            address: "Sector 3",
            jobType: "Remote",
            city: "Noida",
            date: "12-24-2025"
        },
        {
            id: 10,
            img: 'RectangleJ.png',
            title: 'HR Manager',
            address: "Sector 11",
            jobType: "Onsite",
            city: "Chandigarh",
            date: "12-19-2025"
        },
        {
            id: 11,
            img: 'RectangleK.png',
            title: 'Full-stack Developer',
            address: "Sector 6",
            jobType: "Hybrid",
            city: "Bangalore",
            date: "12-22-2025"
        },
        {
            id: 12,
            img: 'RectangleL.png',
            title: 'Customer Success Manager',
            address: "Sector 8",
            jobType: "Remote",
            city: "Pune",
            date: "12-21-2025"
        },
        {
            id: 13,
            img: 'RectangleM.png',
            title: 'Finance Analyst',
            address: "Sector 15",
            jobType: "Onsite",
            city: "Mumbai",
            date: "12-23-2025"
        },
        {
            id: 14,
            img: 'RectangleN.png',
            title: 'Operations Manager',
            address: "Sector 19",
            jobType: "Hybrid",
            city: "Delhi",
            date: "12-20-2025"
        },
        {
            id: 15,
            img: 'RectangleO.png',
            title: 'Legal Advisor',
            address: "Sector 7",
            jobType: "Remote",
            city: "Hyderabad",
            date: "12-18-2025"
        }
    ]


    const leftList = [
        { id: 1, img: "RectangleS.png", title: "Analyst", count: 17 },
        { id: 2, img: "RectangleS.png", title: "Backend Developer", count: 31 },
        { id: 3, img: "RectangleS.png", title: "Business Development", count: 53 },
        { id: 4, img: "RectangleS.png", title: "Customer Service", count: 27 },
        { id: 5, img: "RectangleS.png", title: "Design", count: 35 }

    ];

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h1>Find your dream job now</h1>
                <p>5 Lakh+ jobs for you to explore</p>
            </div>
            <div className="filterContainer">
                <div className="container" style={styles.innerContainer}>
                    <div className="row">
                        <div className="col-3">
                            <div className="inputGroup">
                                <label htmlFor="jobtitle">Keyword</label>
                                <input style={styles.inputStyle} type="text" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="inputGroup">
                                <label htmlForfor="jobtitle">Keyword</label>
                                <input style={styles.inputStyle} type="text" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="inputGroup">
                                <label htmlForfor="jobtitle">Keyword</label>
                                <input style={styles.inputStyle} type="text" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="inputGroup">
                                <label for="jobtitle">Keyword</label>
                                <input style={styles.inputStyle} type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-4"style={{border:"2px solid black"}}>Left
                        {
                            leftList.map(el => (
                                <div>
                                    <div className="row mt-2">
                                        <div className="col-7">
                                            <div className="d-flex">
                                                <img src="/images/RectangleS.png" />
                                                <h6>{el.title}</h6>

                                            </div>

                                        </div>
                                        <div className="col-5 d-flex">
                                            <p>{el.count}</p>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                    
                    <div className="col-8">
                        {
                            list.map(el => (
                                <div className="row mt-2">
                                    <div className="col-7">
                                        <div className="d-flex">
                                            <img src="./images/RectangleA.png" alt="" />
                                            <h3>{el.title}</h3>
                                        </div>
                                        <div className="d-flex">
                                            <p>{el.address}</p>
                                            <p>{el.jobType}</p>
                                            <p>{el.city}</p>
                                        </div>
                                    </div>
                                    <div className="col-5 d-flex">
                                        <p>{el.date}</p>
                                        <button style={styles.applyButton}>Apply</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    
                </div>
            </div>

        </div>

    )
}
export default Gurleen