import React, { useEffect, useState } from "react";
import Paragraph from "../../components/paragraph";

const LeftSide = ({ setActiveIndex, setMenu }) => {
  useEffect(() => {
    const titles = document.querySelectorAll("h2");
    var tab = [];
    for (let index = 0; index < titles.length; index++) {
      const item = {
        id: titles[index].innerHTML,
        title: titles[index].innerHTML,
      };
      tab.push(item);
    }
    setMenu(tab);

    window.addEventListener("scroll", () => {
      var activeMenuIndex = 0;
      for (let index = 0; index < titles.length; index++) {
        if (
          titles[index].getBoundingClientRect().top <
          window.innerHeight * 0.5
        )
          activeMenuIndex = index;
        setActiveIndex(activeMenuIndex);
      }
    });
  }, []);
  return (
    <div className="lg:w-[75%] lg:pr-20">
      <h1 className="font-dancing text-3xl md:text-7xl font-bold mb-4">
        Lorem Ipsum
      </h1>
      <blockquote>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit..."
      </blockquote>
      <blockquote className="text-sm">
        "There is no one who loves pain itself, who seeks after it and wants to
        have it, simply because it is pain..."
      </blockquote>

      <section className="grid md:grid-cols-2 lg:grid-cols-1 gap-10 mt-10">
        <Paragraph title="What is Lorem Ipsum ?">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paragraph>
        <Paragraph title=" Why do we use it ?">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Paragraph>
        <Paragraph title="Where does it come from ?">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </Paragraph>
        <Paragraph title="Where can I get some ?">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </Paragraph>
      </section>
      <section className="my-10 space-y-10">
        <Paragraph title="Some examples...">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vel nulla ligula. Aenean lobortis egestas tempor. Mauris at tempus
          nisi, at congue ante. Aliquam eros metus, cursus eu pretium nec,
          laoreet et ipsum. Mauris est erat, dictum a iaculis vel, laoreet sit
          amet neque. Integer egestas metus nulla, vel tristique turpis accumsan
          tincidunt. Sed eu dui id turpis rhoncus luctus quis in nisl. Duis
          tristique eleifend erat ut suscipit. Nam sapien orci, viverra at
          dignissim at, cursus dapibus orci.
        </Paragraph>
        <Paragraph>
          Donec sollicitudin nunc vitae varius porttitor. Vivamus et vehicula
          justo, eu vulputate libero. Praesent tortor risus, faucibus nec
          faucibus vel, blandit non urna. Integer vitae hendrerit felis.
          Praesent lobortis iaculis neque sed malesuada. Nam quis bibendum nisl,
          a varius sapien. Fusce at venenatis dui. Donec lectus mi, mattis eget
          ligula vitae, aliquam elementum ipsum. Vestibulum eu iaculis orci.
          Aliquam tristique ligula nisl, in eleifend urna maximus ut. Duis nec
          imperdiet dolor. Etiam non aliquam dolor, sit amet suscipit dolor.
          Nunc egestas aliquam fringilla.
        </Paragraph>
        <Paragraph>
          Vestibulum a tellus ut dui finibus lacinia. Vestibulum ultricies quis
          metus a elementum. Donec vestibulum ligula ut consectetur
          pellentesque. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Sed eget nunc sit amet lacus gravida auctor. Duis
          condimentum nisi lacus. Nunc lobortis nulla nec varius viverra.
          Pellentesque tincidunt laoreet urna a accumsan.
        </Paragraph>
        <Paragraph>
          Praesent nec diam eu eros accumsan tincidunt. Duis mauris felis,
          pharetra et vulputate a, laoreet ac velit. Phasellus rhoncus risus
          placerat, tempor nunc at, pellentesque enim. Suspendisse potenti.
          Nulla cursus dui eget laoreet vestibulum. Vivamus elementum venenatis
          dolor, at pulvinar lectus laoreet et. Curabitur at porta orci. Quisque
          tellus velit, hendrerit eget dui eu, tempus congue erat. Maecenas nisi
          metus, finibus rhoncus tortor quis, pharetra imperdiet ex. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Ut facilisis ac erat in tincidunt. Duis aliquam feugiat
          tincidunt. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Curabitur gravida ex et ipsum volutpat
          pellentesque.
        </Paragraph>
        <Paragraph>
          Sed ac magna ac ex vestibulum euismod ullamcorper non enim. Morbi
          interdum nisl velit, a auctor massa consequat in. Proin tellus ex,
          lobortis ac augue sit amet, malesuada faucibus nisl. Nullam suscipit
          id arcu sed consequat. Praesent egestas magna sit amet ullamcorper
          rutrum. Sed sit amet velit vel nulla vestibulum venenatis.
          Pellentesque purus urna, suscipit sit amet felis quis, bibendum
          elementum lacus. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Nullam scelerisque vitae arcu eget
          semper. Vestibulum rutrum, sem in tincidunt dictum, sapien risus
          maximus ipsum, a condimentum libero lectus in lacus. Nulla est magna,
          ullamcorper sed tristique sit amet, pharetra vel justo. Nulla a
          dignissim urna, et egestas velit. Sed tempus at magna vitae fermentum.
        </Paragraph>
        <Paragraph>
          Praesent et dolor et arcu tristique dictum maximus non nibh. Sed ut
          maximus ante. Nullam pretium magna eget elementum suscipit. Donec sed
          pretium nibh. Aliquam erat volutpat. Mauris a ultrices odio. In id
          nibh eu justo congue tempor. Nam ac tristique turpis. Phasellus
          elementum nulla id odio dapibus, ac fringilla libero consequat.
          Phasellus eget mattis nibh.
        </Paragraph>
        <Paragraph>
          Vivamus consectetur ligula at mi vulputate faucibus. Quisque ultrices
          libero sit amet dui tincidunt eleifend. Integer venenatis sem lectus,
          eu tincidunt felis gravida vitae. Duis id dui eget nibh euismod
          tincidunt. Phasellus a ipsum vel erat sagittis convallis non eget
          urna. In porttitor tortor mattis, elementum ex non, malesuada quam.
          Maecenas vel odio et augue pellentesque eleifend sit amet vel ante.
          Cras ex erat, viverra elementum ornare a, finibus at libero. Phasellus
          rutrum neque eu vestibulum aliquam. Phasellus eu enim quis erat mollis
          finibus eu et leo. Duis sit amet dui ullamcorper, volutpat nulla sed,
          malesuada mi. In consequat, lacus sit amet varius rutrum, nibh eros
          finibus ex, ac sollicitudin quam nulla eu elit.
        </Paragraph>
        <Paragraph>
          Etiam quam ex, condimentum ut consequat in, consequat at ante. Donec
          tempor libero ex, dapibus porttitor tortor vehicula sit amet. In
          tempor neque tellus, et auctor arcu sagittis vitae. Fusce rutrum
          molestie odio, iaculis vehicula risus fringilla ut. Curabitur vel mi
          et dolor interdum fermentum. Vestibulum ut egestas dolor, id
          pellentesque orci. Quisque dictum magna lorem. Etiam euismod, neque eu
          condimentum finibus, tellus mauris tristique leo, eget ornare lectus
          nisi in purus. Donec molestie felis eget maximus laoreet. Cras eu
          velit aliquet, vestibulum ipsum quis, varius turpis.
        </Paragraph>
        <Paragraph>
          Morbi bibendum eros auctor, gravida mi id, dignissim erat. Vivamus ut
          dolor porttitor, aliquam tellus vitae, semper risus. Mauris a orci
          dapibus, pharetra elit et, sodales tortor. Pellentesque mi lectus,
          vestibulum ac varius at, porta at erat. Donec at dictum purus, sed
          hendrerit enim. Aenean et ex eget magna dictum pulvinar. Integer
          lacinia felis non orci condimentum rhoncus. Ut pellentesque risus
          venenatis imperdiet fringilla. Pellentesque fringilla sapien lorem, at
          pellentesque ligula posuere in. Curabitur non diam ex. Phasellus
          tincidunt magna massa, a feugiat nisl sagittis egestas.
        </Paragraph>
        <Paragraph>
          Praesent sit amet nisi pharetra, volutpat turpis dignissim,
          pellentesque elit. Nullam diam lacus, egestas pharetra nunc eget,
          finibus feugiat risus. Vestibulum pharetra metus dictum massa euismod,
          eget convallis ligula iaculis. Aliquam iaculis dictum malesuada.
          Praesent eu ullamcorper dolor. Praesent eu viverra dolor. Quisque non
          justo pellentesque massa interdum maximus. Sed fringilla malesuada
          dictum. Phasellus quam tellus, pulvinar nec gravida nec, mattis et
          turpis. Pellentesque sodales feugiat turpis, non imperdiet quam
          aliquet eget.
        </Paragraph>
      </section>
    </div>
  );
};

export default LeftSide;
