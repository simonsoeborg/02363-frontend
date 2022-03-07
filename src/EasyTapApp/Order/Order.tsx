
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import OrderDisplayCalculator from "./OrderDisplayCalculator";
import DisplayCategories from "./OrderDisplayCategories";
import OrderDisplayItems from "./OrderDisplayItems";
import OrderDisplayOverView from "./OrderDisplayOverView";
import CategoryModel from "../../Models/CategoryModel";
import ItemModel from "../../Models/ItemModel";
import OrderModel from "../../Models/OrderModel";
import { cs } from "../../Stores/CategoryStore";
import { is } from "../../Stores/ItemStore";
import { os } from "../../Stores/OrderStore";
import Loading from '../../Partials/Loading';
import { observer } from "mobx-react-lite";

//Hardcoded tableNumber, but should get tableNumber from an onClick function earlier.
const Order = () => {
  const[categories, setCategories] = useState<CategoryModel[]>([]);
  const[selectedCategory, setSelectedCategory] = useState<String>("Starters");
  const[items, setItems] = useState<ItemModel[]>([]);
  const[calculatorValue, setCalculaterValue] = useState(1);
  const[tempOrder, setTempOrder] = useState<OrderModel[]>([]);
  const[order, setOrder] = useState<OrderModel[]>([]);
  const[tableNr, setTableNr] = useState(0);
  const[hasLoaded, setHasLoaded] = useState(false);

  if(!cs.Categories && !is.Items){
    return (
      <Loading />
  )
  }else{ 
    if(cs.Categories.length > 0 && is.Items.length > 0){
      if(!hasLoaded){
      setHasLoaded(true); 
      setCategories(cs.Categories);
      setItems(is.Items);
      }
    }
   
    
    return (
      <Container fluid>
        <Row md="auto">
          <h1>Table: 5 </h1>
        </Row>
        <Row md="auto">
        <p>Reserved at: <b>15:00</b> for <b>Brian Sandberg</b></p>
        </Row>
        <Row>
          <Col md={8}>
            <Row>
              <DisplayCategories categories={categories} setCategories={setCategories} setSelectedCategory={setSelectedCategory}/>
            </Row>
            <br></br>
            <Row>
              <OrderDisplayItems items={items} setItems={setItems} selectedCategory={selectedCategory} />
            </Row>
          </Col>
          <Col>
            <Row >
            <OrderDisplayOverView />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default observer(Order);