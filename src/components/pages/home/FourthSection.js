import React from "react";
import ClassicsCard from "../../reusable-ui/ClassicsCard";

export default function FourthSection() {
  return (
    <section className="px-6">
      <h3 className=" text-4xl tracking-tighter font-Lilita font-medium uppercase">
        shop by classics
      </h3>
      <div className="flex pb-6 gap-3 overflow-x-auto">
        <ClassicsCard
          name="Air Jordan 1"
          image="https://images.unsplash.com/photo-1656335362192-2bc9051b1824?q=80&w=3395&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ClassicsCard
          name="Air Force 1"
          image="https://images.unsplash.com/photo-1597350584914-55bb62285896?q=80&w=2817&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ClassicsCard
          name="Dunk"
          image="https://images.unsplash.com/photo-1704677982224-89cd6d039fa6?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ClassicsCard
          name="Air Max"
          image="https://images.unsplash.com/photo-1620138546344-7b2c38516edf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWlyJTIwbWF4fGVufDB8fDB8fHww"
        />
        <ClassicsCard
          name="Blazer"
          image="https://images.unsplash.com/photo-1699593022913-7068606059c8?q=80&w=3360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ClassicsCard
          name="Vomero"
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </section>
  );
}
