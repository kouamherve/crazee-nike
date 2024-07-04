import Button from "../../reusable-ui/Button";
import ClassicsCard from "../../reusable-ui/ClassicsCard";

export default function ThirdSection() {
  return (
    <div className="px-6 pb-20">
      <div className=" py-20 text-center text-white">
        <h3 className=" text-3xl font-medium ">
          Built to Compete Against the Best On Every Track, Court and Pitch
        </h3>
        <div className=" space-x-2 pt-6 text-dark ">
          <Button className=" bg-white border border-white">
            Experience Air
          </Button>
          <Button className="  bg-white border border-white">Shop Air</Button>
        </div>
      </div>
      <div className=" pb-20">
        <h3 className=" text-3xl text-white font-medium capitalize">
          shop by category
        </h3>
        <div className="flex gap-3 overflow-x-auto">
          <ClassicsCard
            name="Apparel"
            image="https://shop.us.thesportsedit.com/cdn/shop/products/311023-TSE-EDITORIAL-0665_0e63b150-f741-4bb4-b075-e8122e56f2ca_325x.jpg?v=1700246353"
          />
          <ClassicsCard
            name="Footwear"
            image="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_375,c_limit/2c760d2d-aca5-4d45-ad5c-e0c3880dacec/image.jpg"
          />
          <ClassicsCard
            name="Accessories & Equipment"
            image="https://cdn.pixabay.com/photo/2023/09/03/17/28/young-8231165_1280.jpg"
          />
        </div>
      </div>
      <div className="">
        <h3 className=" text-3xl text-white font-medium capitalize">
          shop air
        </h3>
        <div className="flex gap-3 overflow-x-auto">
          <ClassicsCard
            name="Crazee-Nike Alphafly 3"
            image="https://static.nike.com/a/images/t_default/163d9f52-ede6-483a-acff-558b40d89cac/alphafly-3-blueprint-mens-road-racing-shoes-bxz9NF.png"
          />
          <ClassicsCard
            name="Crazee-Nike Pagasus 41"
            image="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4181263e-b343-4dae-bc36-025425bc8033/pegasus-41-blueprint-womens-road-running-shoes-tSbZGh.png"
          />
          <ClassicsCard
            name="Crazee-Nike GT Hustle 3"
            image="https://cdn.sanity.io/images/d6wcctii/production/824fe678c63cb83bf42a7dcea17d1c74b6484d00-1070x760.jpg?w=1600&q=95&fit=clip&auto=format"
          />
          <ClassicsCard
            name="Crazee-Nike Mercurial Superfly"
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f02453d3-7589-4c91-b86c-6f2262153eac/mercurial-superfly-10-elite-blueprint-fg-high-top-soccer-cleats-RRP8Cr.png"
          />

          <ClassicsCard
            name="Crazee-Nike Pegasus EasyOn"
            image="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8301a11f-4b63-4034-bd1e-ff080dcad33b/pegasus-easyon-blueprint-mens-road-running-shoes-gfqzHD.png"
          />
          <ClassicsCard
            name="Crazee-Nike Mercurial Vapor"
            image="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0c3614d2-4d0d-459e-9d5b-64b0cf988e43/mercurial-vapor-16-elite-blueprint-fg-low-top-soccer-cleats-34R4Mp.png"
          />
          <ClassicsCard
            name="Crazee-Nike Maxfly 2"
            image="https://trackandfieldclothes.com/wp-content/uploads/2024/06/ISIMG-649122.jpg"
          />
        </div>
      </div>
    </div>
  );
}
