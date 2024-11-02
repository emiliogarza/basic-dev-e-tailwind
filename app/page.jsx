import Link from 'next/link';
import Image from 'next/image';


export default function Page() {
    return (
      <div>
        <div className="card img">
          <Image
            src="/images/me1.jpg"
            priority
            height={500}
              width={500}
              alt="Emilio Garza"
          />
          <p>My name is Emilio Garza. Senior Software Engineer from Northern California.</p>
        </div>
        <div class="blog-posts">
          <h3 class="blog-posts-heading">Rants</h3>
          <Link href="/blog/test" class="blogLink">
                <div class="card card--with-link">
                    <h2>Hello World!</h2>
                    <p>Just want to test stuff out for fun...</p>
                </div>
            </Link>
        </div>
      </div>
      )
}
