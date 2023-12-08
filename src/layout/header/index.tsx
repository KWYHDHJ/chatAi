
import { Avatar, Tooltip, message } from "antd"
import "./index.less"
import { UserOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"



const Header = () => {
  const navigate = useNavigate()
  const outLoginHandler = () => {
    message.success('退出成功！');
    localStorage.removeItem('userName')
    navigate('/login')
  }
  const outLogin = <span onClick={outLoginHandler} className="outLogin">退出登录</span>


  return (
    <>
      <div className="head">
        <div style={{ width: "100%", textAlign: "center", fontSize: "20px", color: "#0070c0", fontWeight: "bold" }}>西门子工控AI AGENT</div>
        <Tooltip title={outLogin} color="#fff" mouseLeaveDelay={0.5} >
          <Avatar style={{ backgroundColor: '#0070c0' }} icon={<UserOutlined />} />
        </Tooltip>
        <span className="title">admin</span>
      </div >
    </>
  )
}


export default Header
