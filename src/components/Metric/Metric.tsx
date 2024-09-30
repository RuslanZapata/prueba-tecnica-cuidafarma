import Location from '../../assets/icons/Location';
import Servers from "../../assets/icons/Servers"
import User from "../../assets/icons/User"
import '../../sass/components/metric/metric.scss'


const Metric = () => {
  return (
    <div className="metric">
      <div className="metric__item">
        <User />
        <div className="metric__item__data">
          <strong>90+</strong>
          <span>Users</span>
        </div>
      </div>
      <div className="metric__item">
        <Location />
        <div className="metric__item__data">
          <strong>30+</strong>
          <span>Locations</span>
        </div>

      </div>
      <div className="metric__item">
        <Servers />
        <div className="metric__item__data">
          <strong>50+</strong>
          <span>Servers</span>
        </div>

      </div>
    </div>
  )
}

export default Metric