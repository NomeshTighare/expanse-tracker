import React from 'react';
import { FaTrash } from 'react-icons/fa';
import TotalAmmount from './components/TotalAmmount';
import Navbar from './components/Navbar';

function Dashboard() {
  return (
    <>
      <Navbar Page="Dashboard"/>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <TotalAmmount type="success" value="15,00,000" name="Budget" />
          </div>
          <div className="col-md-4">
            <TotalAmmount type="warning" value="07,00,000" name="Expanse" />
          </div>
          <div className="col-md-4">
            <TotalAmmount type="danger" value="08,00,000" name="Remaining" />
          </div>

          <div className="col-md-12">
            <h2>Last Five Transactions</h2>
            <table class="table table-dark table-hover">
              <thead>
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">TotalAmmount</th>
                  <th scope="col">Details</th>
                  <th scope="col">Date</th>
                  <th scope="col" className="teaxt-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>15,00,000</td>
                  <td>By ATM</td>
                  <td>28/7/2021</td>
                  <td>
                    <FaTrash  color={"red"} align={"center"}/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
