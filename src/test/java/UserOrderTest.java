import com.panda.bookstore.domain.*;
import org.hibernate.*;
import org.hibernate.cfg.*;
import java.util.*;

public class UserOrderTest {
	public static void main(String[] args){
		Configuration cfg=new Configuration().configure();
		SessionFactory sessionFactory=cfg.buildSessionFactory();
		Session session=sessionFactory.openSession();
		Transaction transaction=session.beginTransaction();
		User user=new User("pipipan","123456","nothing to say","18317126628","1755405701@qq.com");
		session.save(user);
		Order order=new Order("pipipan",1,2,44,new Date());
		order.setUser(user);
		session.save(order);
		Order order2=new Order("pipipan",1,1,22,new Date());
		order2.setUser(user);
		session.save(order2);
		transaction.commit();
		session.close();
		sessionFactory.close();
	}
}
