import React from 'react';
import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
  touristRouteId:string
}
export const DetailPage: React.FC<RouteComponentProps<MatchParams>>= (props) => {
  return (
    <div>
      <h1>路由路线详情页面,路线ID: {props.match.params.touristRouteId}</h1>
    </div>
  )
};