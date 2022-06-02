import React from "react";
import "./style.css";

export default function ViewTimekeeping() {
    return (
        <div className="view-timekeeping-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Timekeeping</div>
                </div>
            </div>
            <div className="row fied-data-row">
                <div>
                    <div className="title-sub">Timesheet</div>
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Date</th>
                            <th>Shift</th>
                            <th>Check-in</th>
                            <th>Check-out</th>
                            <th>Working day</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>01/04/2022</td>
                            <td>-</td>
                            <td>7:00</td>
                            <td>17:00</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>02/04/2022</td>
                            <td>-</td>
                            <td>7:00</td>
                            <td>17:00</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>03/04/2022</td>
                            <td>-</td>
                            <td>7:00</td>
                            <td>17:00</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>04/04/2022</td>
                            <td>-</td>
                            <td>7:00</td>
                            <td>17:00</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>05/04/2022</td>
                            <td>-</td>
                            <td>7:00</td>
                            <td>17:00</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>06/04/2022</td>
                            <td>-</td>
                            <td>7:00</td>
                            <td>17:00</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>07/04/2022</td>
                            <td>-</td>
                            <td>7:00</td>
                            <td>17:00</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>08/04/2022</td>
                            <td>-</td>
                            <td>7:00</td>
                            <td>17:00</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>09/04/2022</td>
                            <td>-</td>
                            <td>7:00</td>
                            <td>17:00</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>10/04/2022</td>
                            <td>-</td>
                            <td>7:00</td>
                            <td>17:00</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>11/04/2022</td>
                            <td>-</td>
                            <td>7:00</td>
                            <td>17:00</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>12/04/2022</td>
                            <td>-</td>
                            <td>7:00</td>
                            <td>17:00</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>13/04/2022</td>
                            <td>-</td>
                            <td>7:00</td>
                            <td>17:00</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>14/04/2022</td>
                            <td>-</td>
                            <td>7:00</td>
                            <td>17:00</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>15/04/2022</td>
                            <td>-</td>
                            <td>7:00</td>
                            <td>17:00</td>
                            <td>1</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <div className="title-sub">Statistical</div>
                    <div>
                        <table className="description">
                            <tr>
                                <th>Number of days of late arrival</th>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th>Number of days to return early</th>
                                <td>0</td>
                            </tr><tr>
                                <th>Number of days to return early</th>
                                <td>0</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}