import com.panda.bookstore.domain.*;
import org.hibernate.*;
import org.hibernate.cfg.*;

import java.util.Date;

public class BookTest {
	public static void main(String[] args){
		Configuration cfg=new Configuration().configure();
		SessionFactory sessionFactory=cfg.buildSessionFactory();
		Session session=sessionFactory.openSession();
		Transaction trans=session.beginTransaction();
		Book book=new Book();
		book.setDescription("22");
		book.setName("pipipan");
		book.setPrice(22);
		book.setStorage(33);
		book.setWriter("333");
		book.setPublishTime(new Date());
		session.save(book);
		trans.commit();
		session.close();
		sessionFactory.close();

	}
}
