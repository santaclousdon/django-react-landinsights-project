import React, { Component } from "react";

import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import {} from "library";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default class UsersChart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let chart_options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            interaction: {
                intersect: false,
                mode: "index",
            },
            scales: {
                y: {
                    grid: {
                        drawBorder: false,
                        display: true,
                        drawOnChartArea: true,
                        drawTicks: false,
                        borderDash: [5, 5],
                    },
                    ticks: {
                        display: true,
                        padding: 10,
                        color: "#b2b9bf",
                        font: {
                            size: 11,
                            family: "Open Sans",
                            style: "normal",
                            lineHeight: 2,
                        },
                    },
                },
                x: {
                    grid: {
                        drawBorder: false,
                        display: false,
                        drawOnChartArea: false,
                        drawTicks: false,
                        borderDash: [5, 5],
                    },
                    ticks: {
                        display: true,
                        color: "#b2b9bf",
                        padding: 20,
                        font: {
                            size: 11,
                            family: "Open Sans",
                            style: "normal",
                            lineHeight: 2,
                        },
                    },
                },
            },
        };

        let data = {
            labels: MONTHS,
            datasets: [
                {
                    label: "Users",
                    tension: 0.4,
                    borderWidth: 0,
                    pointRadius: 0,
                    borderColor: "#cb0c9f",
                    borderWidth: 3,
                    backgroundColor: (context) => {
                        const ctx = context.chart.ctx;
                        const gradient = ctx.createLinearGradient(0, 230, 0, 50);
                        gradient.addColorStop(1, "rgba(203,12,159,0.2)");
                        gradient.addColorStop(0.2, "rgba(72,72,176,0.0)");
                        gradient.addColorStop(0, "rgba(203,12,159,0)"); //purple colors
                        return gradient;
                    },
                    fill: true,
                    data: MONTHS.map((x) => this.props.users_by_month[x]),
                    maxBarThickness: 6,
                },
            ],
        };

        return (
            <div className="card mb-5">
                <div className="card-header">
                    <h6>{`New Users By Month (${this.props.users.length} Total)`}</h6>
                </div>
                <div className="card-body">
                    <Line options={chart_options} data={data} style={{ height: "300px" }} />
                </div>
            </div>
        );
    }
}
