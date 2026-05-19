import React, { Component } from "react";
import axios from "axios";
import Add from "../RabitMq/Add";
import "./home.css";

export class home extends Component {
    componentDidMount() {
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        };

        axios.get("user", config).then(
            response => {
                console.log(response);
            },
            error => {
                console.log(error);
            }
        );
    }

    render() {
        return (
            <div className="section2">
                <section className="homeHero">
                    <div className="homeHeroContent">
                        <span className="homeEyebrow">Online bookstore</span>

                        <h1>Discover books, audiobooks and comics in one modern place.</h1>

                        <p>
                            Find your next favorite story, explore new releases and enjoy a clean,
                            simple shopping experience.
                        </p>

                        <div className="homeHeroActions">
                            <a href="/ebooks" className="homePrimaryButton">
                                Browse ebooks
                            </a>

                            <a href="/AudioBooks" className="homeSecondaryButton">
                                Explore audiobooks
                            </a>
                        </div>
                    </div>

                    <div className="homeHeroCard">
                        <span>Today&apos;s pick</span>
                        <strong>Best audiobooks</strong>
                        <p>Fresh recommendations selected for you.</p>
                    </div>
                </section>

                <section className="add">
                    <Add />
                </section>

                <section className="homeCards">
                    <div className="rec">
                        <span className="cardLabel">Recommendation</span>
                        <h2>Buy it now!</h2>
                        <p>Check current offers and choose something worth reading today.</p>
                    </div>

                    <div className="best">
                        <span className="cardLabel">Top category</span>
                        <h2>Best audiobooks</h2>
                        <p>Listen anywhere and enjoy the most popular titles from our collection.</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default home;