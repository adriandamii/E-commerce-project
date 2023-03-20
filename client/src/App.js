import { Route, Routes } from 'react-router-dom';
import CreateProduct from './pages/createProduct/CreateProduct';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import Filters from './pages/Filters/Filters';
import CreateAutoMotoBoats from './pages/createProduct/CreateAutoMotoBoats';
import CreateAgroIndustry from './pages/createProduct/CreateAgroIndustry';
import CreateMomsKids from './pages/createProduct/CreateMomsKids';
import CreateFashion from './pages/createProduct/CreateFashion';
import CreateAutoParts from './pages/createProduct/CreateAutoParts';
import CreateElectronicsAppliances from './pages/createProduct/CreateElectronicsAppliances';
import CreateRealEstate from './pages/createProduct/CreateRealEstate';
import CreateSportFreeTimeArt from './pages/createProduct/CreateSportFreeTimeArt';
import CreateHouseAndGarden from './pages/createProduct/CreateHouseAndGarden';
import CreateAnimals from './pages/createProduct/CreateAnimals';
import CreateServicesCompanyEquipment from './pages/createProduct/CreateServicesCompanyEquipment';
import EditAutoMotoBoats from './pages/editProduct/EditAutoMotoBoats';
import EditRealEstate from './pages/editProduct/EditRealEstate';
import EditElectronicsAppliances from './pages/editProduct/EditElectronicsAppliances';
import EditAgroIndustry from './pages/editProduct/EditAgroIndustry';
import EditSportFreeTimeArt from './pages/editProduct/EditSportFreeTimeArt';
import EditServicesCompanyEquipment from './pages/editProduct/EditServicesCompanyEquipment';
import EditHouseAndGarden from './pages/editProduct/EditHouseAndGarden';
import EditAutoParts from './pages/editProduct/EditAutoParts';
import EditFashion from './pages/editProduct/EditFashion';
import EditMomsKids from './pages/editProduct/EditMomsKids';
import EditAnimals from './pages/editProduct/EditAnimals';
import LoginPage from './pages/login-register/LoginPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBottomCategories from './components/NavBottomContent/NavBottomCategories';
import NavBottomMenu from './components/NavBottomContent/NavBottomMenu';
import SearchBox from './components/SearchBox';
import Cart from './pages/CartPage/Cart';
import AdminRoute from './components/Routes/AdminRoute';
import SellerRoute from './components/Routes/SellerRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
import AdminPage from './pages/adminPage/AdminPage';
import ProductListPage from './pages/adminPage/productListPage/ProductListPage';
import DashboardPage from './pages/adminPage/dashboardPage/DashboardPage';
import OrderListPage from './pages/adminPage/orderListPage/OrderListPage';
import SupportPage from './pages/adminPage/supportPage/SupportPage';
import UserEditPage from './pages/adminPage/userEditPage/UserEditPage';
import UserListPage from './pages/adminPage/userListPage/UserListPage';
import FormSellerPage from './pages/sellerPage/formSellerPage/FormSellerPage';
import SellerInformation from './pages/sellerPage/sellerCPanelItems/sellerInformations/SellerInformation';
import SellerAccountTransactions from './pages/sellerPage/sellerCPanelItems/accountTransactions/SellerAccountTransactions';
import ClientAccountTransactions from './pages/clientPage/clientCPanelItems/accountTransactions/ClientAccountTransactions';
import SellerAccountPurchases from './pages/sellerPage/sellerCPanelItems/accountPurchases/SellerAccountPurchases';
import ClientAccountPurchases from './pages/clientPage/clientCPanelItems/accountPurchases/ClientAccountPurchases';
import ClientAccountHelp from './pages/clientPage/clientCPanelItems/accountHelp/ClientAccountHelp';
import SellerAccountHelp from './pages/sellerPage/sellerCPanelItems/accountHelp/SellerAccountHelp';

import ClientAccountKYC from './pages/clientPage/clientCPanelItems/accountKYC/ClientAccountKYC';
import ClientInformation from './pages/clientPage/clientCPanelItems/clientInformations/ClientInformation';
import Wts from './pages/clientPage/clientCPanelItems/clientWTS/Wts';
import AccountActivate from './pages/login-register/AccountActivate/AccountActivate';
import RegisterPage from './pages/login-register/RegisterPage';
import NavBottom from './components/NavBottom/NavBottom';
import ForgotPassword from './pages/login-register/ForgotPassword';
import PasswordReset from './pages/login-register/PasswordReset';

const App = () => {
  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;
  //   if (currentScrollPos === 0) {
  //     document.getElementById('navbar').style.display = 'none';
  //   }
  //   if (currentScrollPos > 120) {
  //     document.getElementById('navbar').style.top = '0';
  //     document.getElementById('navbar').style.display = 'flex';
  //   } else {
  //     document.getElementById('navbar').style.top = '-70px';
  //   }
  // };
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/createProduct" element={<CreateProduct />} />
          <Route
            path="/createProduct/autoMotoBoats"
            element={<CreateAutoMotoBoats />}
          />
          <Route
            path="/createProduct/realEstate"
            element={<CreateRealEstate />}
          />
          <Route
            path="/createProduct/electronicsAppliances"
            element={<CreateElectronicsAppliances />}
          />
          <Route
            path="/createProduct/autoParts"
            element={<CreateAutoParts />}
          />
          <Route path="/createProduct/fashion" element={<CreateFashion />} />
          <Route path="/createProduct/momsKids" element={<CreateMomsKids />} />
          <Route
            path="/createProduct/agroIndustry"
            element={<CreateAgroIndustry />}
          />
          <Route path="/createProduct/animals" element={<CreateAnimals />} />
          <Route
            path="/createProduct/sportFreeTimeArt"
            element={<CreateSportFreeTimeArt />}
          />
          <Route
            path="/createProduct/servicesCompanyEquipment"
            element={<CreateServicesCompanyEquipment />}
          />
          <Route
            path="/createProduct/houseAndGarden"
            element={<CreateHouseAndGarden />}
          />
          <Route
            path="/:id/editProduct/autoMotoBoats"
            element={<EditAutoMotoBoats />}
          />
          <Route
            path="/:id/editProduct/realEstate"
            element={<EditRealEstate />}
          />
          <Route
            path="/:id/editProduct/electronicsAppliances"
            element={<EditElectronicsAppliances />}
          />
          <Route
            path="/:id/editProduct/autoParts"
            element={<EditAutoParts />}
          />
          <Route path="/:id/editProduct/fashion" element={<EditFashion />} />
          <Route path="/:id/editProduct/momsKids" element={<EditMomsKids />} />
          <Route
            path="/:id/editProduct/agroIndustry"
            element={<EditAgroIndustry />}
          />
          <Route path="/:id/editProduct/animals" element={<EditAnimals />} />
          <Route
            path="/:id/editProduct/sportFreeTimeArt"
            element={<EditSportFreeTimeArt />}
          />
          <Route
            path="/:id/editProduct/servicesCompanyEquipment"
            element={<EditServicesCompanyEquipment />}
          />
          <Route
            path="/:id/editProduct/houseAndGarden"
            element={<EditHouseAndGarden />}
          />
          <Route
            path="/filters/name/:name/mainCategory/:mainCategory"
            exact
            element={<Filters />}
          />
          <Route path="/filters/name/:name" exact element={<Filters />} />
          <Route
            path="/filters/mainCategory/:mainCategory"
            exact
            element={<Filters />}
          />
          <Route
            path="/filters/mainCategory/:mainCategory/category/:category/subCategory/:subCategory"
            exact
            element={<Filters />}
          />
          <Route
            path="/filters/mainCategory/:mainCategory/category/:category"
            exact
            element={<Filters />}
          />
          <Route
            path="/filters/pageNumber/:pageNumber/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/steeringWheel/:steeringWheel/carosery/:carosery/colour/:colour/condition/:condition/fuel/:fuel/minPrice/:minPrice/maxPrice/:maxPrice/minYear/:minYear/maxYear/:maxYear/minKm/:minKm/maxKm/:maxKm/minEngine/:minEngine/maxEngine/:maxEngine/minHorsePower/:minHorsePower/maxHorsePower/:maxHorsePower/furnished/:furnished/rooms/:rooms/minUsefulSurface/:minUsefulSurface/maxUsefulSurface/:maxUsefulSurface/groundType/:groundType/commerceType/:commerceType/brand/:brand/rezolution/:rezolution/usefulTask/:usefulTask/size/:size/material/:material/season/:season/display/:display/whichFor/:whichFor/waterResistance/:waterResistance/caseMaterial/:caseMaterial/caseColour/:caseColour/soleType/:soleType/floor/:floor/minLandArea/:minLandArea/maxLandArea/:maxLandArea/minBuiltArea/:minBuiltArea/maxBuiltArea/:maxBuiltArea/compartimentType/:compartimentType/productType/:productType/chargeType/:chargeType/mountType/:mountType/tireSize/:tireSize/tireWidth/:tireWidth/tireProfile/:tireProfile/rimType/:rimType/rimSize/:rimSize/age/:age/experience/:experience/operationDistance/:operationDistance/availability/:availability/financePosibility/:financePosibility/guarantee/:guarantee/emergencyService/:emergencyService/memoryR/:memoryR/videoType/:videoType/storageType/:storageType/processorBrand/:processorBrand"
            exact
            element={<Filters />}
          />
          <Route path="/" exact element={<HomePage />} />
          <Route path="/category" exact element={<NavBottomCategories />} />
          <Route path="/menuPages" exact element={<NavBottomMenu />} />
          <Route path="/search" exact element={<SearchBox />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/:id" exact element={<ProductPage />} />
          <Route path="/signin" element={<LoginPage />}></Route>
          {/* <Route path="/register" element={<RegisterPage />}></Route> */}
          {/* <Route path="/help" element={<AccountHelp />}></Route> */}
          {/* <Route path="/kyc" element={<AccountKYC />}></Route> */}
          <Route
            path="/authentication/activate/:token"
            element={<AccountActivate />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:id/:token" element={<PasswordReset />} />

          <Route
            path="/adminpage"
            element={
              <AdminRoute>
                <AdminPage />
              </AdminRoute>
            }
          />
          <Route
            path="/productlist"
            element={
              <AdminRoute>
                <ProductListPage />
              </AdminRoute>
            }
          />

          <Route
            path="/productlist/pageNumber/:pageNumber"
            element={
              <AdminRoute>
                <ProductListPage />
              </AdminRoute>
            }
          />
          <Route
            path="/userlist"
            element={
              <AdminRoute>
                <UserListPage />
              </AdminRoute>
            }
          />
          <Route
            path="/user/:id/edit"
            element={
              <AdminRoute>
                <UserEditPage />
              </AdminRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <DashboardPage />
              </AdminRoute>
            }
          />
          <Route
            path="/support"
            element={
              <AdminRoute>
                <SupportPage />
              </AdminRoute>
            }
          />
          <Route
            path="/seller/accountInfo"
            element={
              <SellerRoute>
                <SellerInformation />
              </SellerRoute>
            }
          />
          <Route
            path="/seller/purchases"
            element={
              <SellerRoute>
                <SellerAccountPurchases />
              </SellerRoute>
            }
          />
          <Route
            path="/seller/transactions"
            element={
              <SellerRoute>
                <SellerAccountTransactions />
              </SellerRoute>
            }
          />
           <Route
            path="/seller/help"
            element={
              <PrivateRoute>
                <SellerAccountHelp />
              </PrivateRoute>
            }
          />

          {/* <Route
            path="/orderlist"
            element={
              <AdminRoute>
                <OrderListPage />
              </AdminRoute>
            }
          /> */}

          {/*
            <Route
              path="/map"
              element={
                <PrivateRoute>
                  <MapPage />
                </PrivateRoute>
              }
            /> 
            */}
          <Route
            path="/productlist/seller"
            element={
              <SellerRoute>
                <ProductListPage />
              </SellerRoute>
            }
          />
          {/* <Route
            path="/orderlist/seller"
            element={
              <SellerRoute>
                <OrderListPage />
              </SellerRoute>
            }
          /> */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <FormSellerPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/client/accountInfo"
            element={
              <PrivateRoute>
                <ClientInformation />
              </PrivateRoute>
            }
          />
          <Route
            path="/client/purchases"
            element={
              <PrivateRoute>
                <ClientAccountPurchases />
              </PrivateRoute>
            }
          />
          <Route
            path="/client/transactions"
            element={
              <PrivateRoute>
                <ClientAccountTransactions />
              </PrivateRoute>
            }
          />
          <Route
            path="/client/kyc"
            element={
              <PrivateRoute>
                <ClientAccountKYC />
              </PrivateRoute>
            }
          />
          <Route
            path="/client/help"
            element={
              <PrivateRoute>
                <ClientAccountHelp />
              </PrivateRoute>
            }
          />
          <Route
            path="/sell"
            element={
              <PrivateRoute>
                <Wts />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
      {/* <NavBottom /> */}

    </div>
  );
};

export default App;
