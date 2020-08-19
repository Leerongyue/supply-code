type ItemName = {
  carddata: ItemData;
}
type ItemData = {
  barcode: string; goodsname: string; py: string;
}
type ItemNameDetail = {
  carddata: Item;
}
type Item = {
  asknum: string;
  barcode: string;
  enddate: string;
  goodsname: string;
  pbillno: string;
  py: string;
  shopcode: string;
  shopname: string;
  spec: string;
  startdate: string;
}