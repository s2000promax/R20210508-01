import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LinksPage } from './pages/LinksPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { AuthPage } from './pages/AuthPage'
import { DigitalTablet } from './pages/DigitalTablet'
import { ScorePage } from './pages/ScorePage'

export const useRoutes = isAuthenticated => {
if (isAuthenticated) {
    return (
        <Switch>
           
            <Route path="/digitaltablet" exact>
                <DigitalTablet />
            </Route>

            <Route path="/scorepage" exact>
                <ScorePage />
            </Route>

            <Route path="/detail/:id">
                <DetailPage />
            </Route>

            <Redirect to="/digitaltablet" />
        </Switch>
    )
}
return (
    <Switch>
        <Route path="/" exact>
            <AuthPage />
        </Route>

        <Redirect to="/" />
    </Switch>
)
}