import React from 'react';
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const Home = () => {
    return (
        <div>
          <Navigation />
            <div id={"Logo"}>
                <Logo/>
            </div>
          <h1>Home sweet home</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae pulvinar velit. Integer dapibus sed enim maximus cursus. Nullam fringilla, nisl eu mattis ornare, ex nisi placerat lectus, eu volutpat enim lorem in risus. Phasellus in mollis quam, sit amet fringilla leo. Integer accumsan diam quis pharetra hendrerit. Nullam gravida felis et mauris facilisis, ac blandit turpis convallis. Quisque commodo ex urna, sit amet venenatis arcu condimentum eu.
          </p>
          <p>
              Vivamus sodales mattis metus eget fringilla. Cras malesuada ligula ac augue tempor, et convallis mi ultricies. Nam venenatis tincidunt mollis. Aenean dui dui, viverra nec volutpat at, volutpat at quam. Nullam arcu enim, interdum id rutrum eu, ultrices a velit. Donec ornare ullamcorper urna, eget pellentesque massa bibendum sed. Nam dictum lorem sit amet turpis malesuada, ac blandit lorem ultrices. Mauris porta est mi, non ullamcorper lectus varius eu. Suspendisse dictum aliquam efficitur.
          </p>
          <p>
              Aenean ornare vel sem ac sodales. Praesent vulputate justo volutpat cursus consequat. Sed vestibulum felis nisl, eget dictum nunc fermentum eu. Sed ipsum metus, sagittis sed ex sit amet, pulvinar pellentesque leo. Donec sagittis nisi nec euismod commodo. Etiam auctor nisi sem, nec bibendum magna bibendum nec. Nullam varius quam at lacus lacinia, eget feugiat leo eleifend. Maecenas quis bibendum mi, ut rutrum lacus. Etiam eget nisi sit amet tortor pulvinar dapibus. Ut gravida commodo lectus ut dapibus.
          </p>
          <p>
            Curabitur nec justo velit. Mauris id ante bibendum, placerat odio id, molestie justo. Donec nec imperdiet leo. Maecenas at odio vitae nibh venenatis elementum ut vitae arcu. In et gravida lectus, ac mattis risus. Quisque sed ultricies magna. Duis sollicitudin rhoncus enim, a hendrerit neque maximus in. Mauris blandit, ex a lacinia feugiat, magna leo condimentum lectus, in convallis ante ex et massa. Nunc pretium metus augue, quis pharetra ante ullamcorper quis.
          </p>
          <p>
            Pellentesque in urna volutpat, sodales est nec, semper tellus. Quisque vitae sem semper, finibus libero eu, aliquam urna. Aenean imperdiet finibus sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ut erat eu ornare. Donec semper nisl nec leo ornare euismod. Donec vulputate enim nec erat tristique, et viverra dui commodo.
          </p>
        </div>
    );
};

export default Home;