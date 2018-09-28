package cm.app.letsgo.repository.search;

import cm.app.letsgo.domain.Distributor;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Distributor entity.
 */
public interface DistributorSearchRepository extends ElasticsearchRepository<Distributor, Long> {
}
