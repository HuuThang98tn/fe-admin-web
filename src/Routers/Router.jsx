import React from "react";
import { Route, Routes } from "react-router-dom";

import LayoutAdmin from "../components/LayoutAdmin";

//auth
import ScreenLogin from "../container/screens/auth/ScreenLogin";

//Tổng quan
import ScreenOverview from "../container/screens/overview/ScreenOverview";

//Sản Phẩm
import ScreenCreateProduct from "../container/screens/product/ScreenCreateProduct";
import ScreenListProduct from "../container/screens/product/ScreenListProduct";

//Thể loại sản phẩm
import ScreenCreateTypeProduct from "../container/screens/type/ScreenCreateTypeProduct";
import ScreenListTypeProduct from "../container/screens/type/ScreenListTypeProduct";
import ScreenObjectProduct from "../container/screens/type/ScreenObjectProduct";

//Danh sách sản phẩm order
import ScreenListOrder from "../container/screens/order/ScreenListOrder";

//Lợi nhuận
import ScreenListProductProfit from "../container/screens/profit/ScreenListProductProfit";
import ScreenStatistical from "../container/screens/profit/ScreenStatistical";

//Mọi người
import ScreenInfoAdmin from "../container/screens/everyone/ScreenInfoAdmin";
import ScreenListUser from "../container/screens/everyone/ScreenListUser";

//bài viết
import ScreenCreatePost from "../container/screens/posts/ScreenCreatePost";
import ScreenListPost from "../container/screens/posts/ScreenListPost";

const Router = () => {
  return (
    <Routes>
      <Route path="/admin-login" element={<ScreenLogin />}></Route>
      <Route path="/trang-chu" element={<LayoutAdmin />}>
        <Route path="home" element={<ScreenOverview />} />
        <Route path="home-admin" element={<ScreenCreateProduct />} />
        <Route path="admin" element={<ScreenListProduct />} />
      </Route>
    </Routes>
  );
};

export default Router;
