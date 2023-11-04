import React, { useState } from 'react'

const data=[
    {
        id: 1,
        title: "PAGE 1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis iste molestias, repellendus, deserunt perferendis totam, consequatur quis ad aspernatur impedit cupiditate ipsa. Repudiandae asperiores officia odit quia odio iste.",
    },
    {
        id: 2,
        title: "PAGE 2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis iste molestias, repellendus, deserunt perferendis totam, consequatur quis ad aspernatur impedit cupiditate ipsa. Repudiandae asperiores officia odit quia odio iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis iste molestias, repellendus, deserunt perferendis totam, consequatur quis ad aspernatur impedit cupiditate ipsa. Repudiandae asperiores officia odit quia odio iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis iste molestias, repellendus, deserunt perferendis totam, consequatur quis ad aspernatur impedit cupiditate ipsa. Repudiandae asperiores officia odit quia odio iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis iste molestias, repellendus, deserunt perferendis totam, consequatur quis ad aspernatur impedit cupiditate ipsa. Repudiandae asperiores officia odit quia odio iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis iste molestias, repellendus, deserunt perferendis totam, consequatur quis ad aspernatur impedit cupiditate ipsa. Repudiandae asperiores officia odit quia odio iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis iste molestias, repellendus, deserunt perferendis totam, consequatur quis ad aspernatur impedit cupiditate ipsa. Repudiandae asperiores officia odit quia odio iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis iste molestias, repellendus, deserunt perferendis totam, consequatur quis ad aspernatur impedit cupiditate ipsa. Repudiandae asperiores officia odit quia odio iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis iste molestias, repellendus, deserunt perferendis totam, consequatur quis ad aspernatur impedit cupiditate ipsa. Repudiandae asperiores officia odit quia odio iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis iste molestias, repellendus, deserunt perferendis totam, consequatur quis ad aspernatur impedit cupiditate ipsa. Repudiandae asperiores officia odit quia odio iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis iste molestias, repellendus, deserunt perferendis totam, consequatur quis ad aspernatur impedit cupiditate ipsa. Repudiandae asperiores officia odit quia odio iste.",
    },
    {
        id: 3,
        title: "PAGE 3",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis iste molestias, repellendus, deserunt perferendis totam, consequatur quis ad aspernatur impedit cupiditate ipsa. Repudiandae asperiores officia odit quia odio iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis iste molestias, repellendus, deserunt perferendis totam, consequatur quis ad aspernatur impedit cupiditate ipsa. Repudiandae asperiores officia odit quia odio iste.",
    },
    {
        id: 4,
        title: "PAGE 4",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis iste molestias, repellendus, deserunt perferendis totam, consequatur quis ad aspernatur impedit cupiditate ipsa. Repudiandae asperiores officia odit quia odio iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis iste molestias, repellendus, deserunt perferendis totam, consequatur quis ad aspernatur impedit cupiditate ipsa. Repudiandae asperiores officia odit quia odio iste.",
    },
]

function Accordion() {
    const [open, setOpen] = useState(null)
    const handleOpen = (id)=>{
        setOpen(id == open ? null : id)
    }

  return (
    <div className='absolute right-1 h-screen overflow-hidden hidden md:flex'>
        {
            data.map(item=> (
                <AccordionItem 
                key={item.key} 
                item={item}
                open={open}
                onOpen={handleOpen}
                id={item.id}
                />
            ))
        }
    </div>
  )
}

export default Accordion

function AccordionItem({item, open, onOpen, id}){
    const isOpen = id == open;
    return(
        <div className='flex border-2 border-black'>
            <div className={`overflow-auto w-0 ${isOpen ? "md:w-[25rem] lg:w-[45rem] xl:w-[50rem]" : "w-0"} `}>
                {item.content}
            </div>
            <div 
            onClick={()=>onOpen(id)}
            className='w-12 border-l-2 border-black cursor-pointer'>{item.title}</div>
        </div>
    )
}