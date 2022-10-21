import React from 'react'

const Slider = () => {
    return (
        <div className='card' id='cardHomeMain'>
            <div className="row my-3">
                <div className="col-md-3" >
                    <div className="card-header">
                        <h3>Categorias</h3>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                        <li className="list-group-item">And a fifth one</li>
                    </ul>
                </div>
                {/* https://fondosmil.com/fondo/93784.jpg */}
                <div className="col-md-7" >
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active " >
                                <img src="https://www.cavando2u.com/image/cavando2u/image/cache/data/YZVIEsxf1645064016-1980x1080.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item" >
                                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16ea3def-8ec0-44ef-a7b4-4826c3a693af/dd0kdkk-ef61ddd8-474c-48d9-86d3-e36cdcb8423a.jpg/v1/fill/w_642,h_350,q_70,strp/supa4_1980x1080_by_bronounce_dd0kdkk-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzE2ZWEzZGVmLThlYzAtNDRlZi1hN2I0LTQ4MjZjM2E2OTNhZlwvZGQwa2Rray1lZjYxZGRkOC00NzRjLTQ4ZDktODZkMy1lMzZjZGNiODQyM2EuanBnIiwid2lkdGgiOiI8PTE5ODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tZhlJ64UMNQQWC8zCZ64qrk2AUR_PDwGDe5yWAQ-faw" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item" >
                                <img src="https://wallpaper.dog/large/5573988.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-2 d-flex flex-column align-items-center">
                    <p>Sign up to enjoy exciting Buyers Club benefits</p>
                    <button className='btn btn-primary btn-lg'>Join Free</button>
                </div>
            </div>
        </div>
    )
}

export default Slider