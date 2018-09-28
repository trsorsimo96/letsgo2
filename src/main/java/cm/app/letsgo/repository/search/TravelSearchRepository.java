package cm.app.letsgo.repository.search;

import cm.app.letsgo.domain.Travel;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Travel entity.
 */
public interface TravelSearchRepository extends ElasticsearchRepository<Travel, Long> {
}
