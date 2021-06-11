import React from 'react';
import AdminRoute from './Routes/AdminRoute'

const Routes = ()=> {
return (
    <Router>
        <Switch>
            <Route path='/' />
            <AdminRoute path='/admin' />
            <AdminRoute path='/admin/orders/update/:orderId' />
        </Switch>
    </Router>
)
}


export default Routes;