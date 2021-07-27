import React from 'react';
import TotalAmmount from './components/TotalAmmount';
import Navbar from './components/Navbar';

function Dashboard() {
  return (
    <>
     <Navbar />
     <div className="container">
       <div className="row">
         <div className="col-md-4">
         <TotalAmmount type="success" value="3,00,000" name="Total Ammount"/>
         </div>
         <div className="col-md-4">
         <TotalAmmount type="warning" value="2,00,000" name="Total Spend"/>
         </div>
         <div className="col-md-4">
         <TotalAmmount type="danger" value="1,00,000" name="Total Left"/>
         </div>

            <div className="col-md-12">
              <h2>Last Five Transactions</h2>
                <table class="table table-dark table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Sr. No.</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
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
