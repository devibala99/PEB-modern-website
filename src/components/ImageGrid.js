import React from 'react'
import "../stylesheets/imagegrid.css"
import shop from "../images/designshop.jpg";
import infra1 from "../images/design4.jpg";
import infra2 from "../images/prefabHouse1.jpg";
import indus1 from "../images/multystorey.jpg";
import indus2 from "../images/cladding4.jpg";
import indus3 from "../images/cabin.jpg";
import infra3 from "../images/restructure.jpg";
import indus4 from "../images/cabin2.jpg";
import indus5 from "../images/sale.jpg";
import indus6 from "../images/toilets.jpg";
import indus7 from "../images/poultry.jpg"
import indus8 from "../images/peb1.jpg";
import indus9 from "../images/finishtouches.png";
import indus10 from "../images/new-banner12.jpg"
import indus11 from "../images/num1.jpg"
import des3 from "../images/design7.jpg"

const ImageGrid = () => {

    const gridImages = [
        { image: shop, id: 1, alt: "Infrastructure", title: "PEB Shop", desc: "Low cost shop setup", sq: "250 sq.ft" },
        { image: infra1, id: 2, alt: "Infrastructure", title: "House Interior", desc: "Infrastructure with house interior work", sq: "620 sq.ft" },
        { image: infra2, id: 3, alt: "Infrastructure", title: "PEB House", desc: "House is pre fabricated and customized.", sq: "710 sq.ft" },
        { image: indus1, id: 4, alt: "Industrial", title: "Multi Storey Building", desc: "Commercial multi storey buildings for shops.", sq: "2480 sq.ft" },
        { image: indus2, id: 5, alt: "PEB", title: "Private House/Office", desc: "Contemporary style of modern house. ", sq: "2150 sq.ft" },
        { image: indus4, id: 7, alt: "PEB", title: "Multi Storey Office", desc: "Office of multi storey cabins.", sq: "1210 sq.ft" },
        { image: infra3, id: 8, alt: "PEB", title: "PEB House", desc: "Modern and upgraded house style.", sq: "920 sq.ft" },
        { image: indus3, id: 6, alt: "PEB", title: "Portable Cabin", desc: "Portable office cabin multipurpose.", sq: "100 sq.ft" },
        { image: indus5, id: 9, alt: "PEB", title: "Warehouse", desc: "Warehouse for Cotton", sq: "920 sq.ft" },
        { image: indus6, id: 10, alt: "PEB", title: "PEB Toilets", desc: "Portable toilets with customization.", sq: "1340 sq.ft" },
        { image: des3, id: 11, alt: "PEB", title: "Office Interior", desc: "PEB with Interiors and designs.", sq: "980 sq.ft" },
        { image: indus7, id: 12, alt: "PEB", title: "Open Shed for Vehicles", desc: "Pre-Enginnered shed", sq: "250 sq.ft" },
        { image: indus8, id: 13, alt: "PEB", title: "Warehouse", desc: "Cost effective PEB warehouse", sq: "3990 sq.ft" },
        { image: indus9, id: 14, alt: "PEB", title: "Shop", desc: "Shop with warehouse and parking", sq: "1270 sq.ft" },
        { image: indus10, id: 15, alt: "PEB", title: "Industry", desc: "Pre Engineered Building - Industry", sq: "6890 sq.ft" },
        { image: indus11, id: 16, alt: "PEB", title: "Industrial Warehouse", desc: "Pre Engineered Warehouse for storage", sq: "2250 sq.ft" },
    ]


    const imagesGrid = gridImages.map((list) => {
        return (
            <div className='grid-gallery' key={list.id} >
                <img src={list.image} alt={list.alt} key={list.id} />
                <div className='imageContent' style={{ textAlign: "left" }}>
                    <h3 style={{ fontSize: "1.2rem", paddingLeft: "10px" }}>{list.title}</h3>
                    <div className="con" style={{ color: "rgba(255,255,255,0.433)", paddingLeft: "10px" }}>
                        <p>{list.desc}</p>
                        <p>{list.sq}</p>
                    </div>
                </div>
            </div>
        )

    })
    console.log(imagesGrid);
    return (
        <div className='gallery'>
            {imagesGrid}
        </div>
    )
}


export default ImageGrid
